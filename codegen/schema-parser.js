import { readFileSync } from 'node:fs';
import {
  buildSchema,
  isEnumType,
  isInputObjectType,
  isObjectType,
  isNonNullType,
  isListType,
  isScalarType,
} from 'graphql';

function unwrapType(type) {
  let required = false;
  let isList = false;
  let t = type;

  if (isNonNullType(t)) {
    required = true;
    t = t.ofType;
  }
  if (isListType(t)) {
    isList = true;
    t = t.ofType;
    // unwrap NonNull inside list
    if (isNonNullType(t)) {
      t = t.ofType;
    }
  }

  return {
    typeName: t.toString(),
    namedType: t,
    required,
    isList,
  };
}

function extractFields(fieldsMap) {
  const result = [];
  for (const [name, field] of Object.entries(fieldsMap)) {
    const { typeName, required, isList } = unwrapType(field.type);
    const args = (field.args || []).map(arg => {
      const u = unwrapType(arg.type);
      return {
        name: arg.name,
        typeName: u.typeName,
        required: u.required,
        isList: u.isList,
        description: arg.description || '',
        defaultValue: arg.defaultValue,
      };
    });

    result.push({
      name,
      typeName,
      required,
      isList,
      args,
      description: field.description || '',
      deprecationReason: field.deprecationReason || null,
      isDeprecated: !!field.deprecationReason,
    });
  }
  return result;
}

function extractEnums(schema) {
  const enums = {};
  const typeMap = schema.getTypeMap();
  for (const [name, type] of Object.entries(typeMap)) {
    if (name.startsWith('__')) continue;
    if (isEnumType(type)) {
      enums[name] = type.getValues().map(v => v.value);
    }
  }
  return enums;
}

function extractInputTypes(schema) {
  const inputs = {};
  const typeMap = schema.getTypeMap();
  for (const [name, type] of Object.entries(typeMap)) {
    if (name.startsWith('__')) continue;
    if (isInputObjectType(type)) {
      const fields = {};
      for (const [fieldName, field] of Object.entries(type.getFields())) {
        const u = unwrapType(field.type);
        fields[fieldName] = {
          typeName: u.typeName,
          required: u.required,
          isList: u.isList,
          description: field.description || '',
          defaultValue: field.defaultValue,
          deprecationReason: field.deprecationReason || null,
        };
      }
      inputs[name] = { fields, description: type.description || '' };
    }
  }
  return inputs;
}

function extractObjectTypes(schema) {
  const objects = {};
  const typeMap = schema.getTypeMap();
  for (const [name, type] of Object.entries(typeMap)) {
    if (name.startsWith('__')) continue;
    if (isObjectType(type) && name !== 'Query' && name !== 'Mutation' && name !== 'Subscription') {
      const fields = {};
      for (const [fieldName, field] of Object.entries(type.getFields())) {
        const u = unwrapType(field.type);
        const args = (field.args || []).map(arg => {
          const a = unwrapType(arg.type);
          return { name: arg.name, typeName: a.typeName, required: a.required };
        });
        fields[fieldName] = {
          typeName: u.typeName,
          required: u.required,
          isList: u.isList,
          description: field.description || '',
          args,
        };
      }
      objects[name] = {
        fields,
        description: type.description || '',
        interfaces: type.getInterfaces().map(i => i.name),
      };
    }
  }
  return objects;
}

export function parseSchema(schemaPath) {
  const source = readFileSync(schemaPath, 'utf-8');
  const schema = buildSchema(source);

  const queryType = schema.getQueryType();
  const mutationType = schema.getMutationType();

  const queries = queryType ? extractFields(queryType.getFields()) : [];
  const mutations = mutationType ? extractFields(mutationType.getFields()) : [];
  const enums = extractEnums(schema);
  const inputTypes = extractInputTypes(schema);
  const objectTypes = extractObjectTypes(schema);

  return { queries, mutations, enums, inputTypes, objectTypes };
}
