const SCALAR_MAP = {
  String: 'string',
  ID: 'string',
  Int: 'number',
  Float: 'number',
  Boolean: 'boolean',
  DateTime: 'string',
  TimelessDate: 'string',
  JSON: 'string',
  JSONObject: 'string',
  UUID: 'string',
};

export function gqlTypeToYargsType(typeName, isList, enums) {
  if (isList) {
    return { type: 'array' };
  }
  if (enums && enums[typeName]) {
    return { type: 'string', choices: enums[typeName] };
  }
  const mapped = SCALAR_MAP[typeName];
  if (mapped) {
    return { type: mapped };
  }
  // Input objects, unions, and other complex types → accept as JSON string
  return { type: 'string' };
}

export function isScalarTypeName(typeName) {
  return typeName in SCALAR_MAP;
}

export function isConnectionType(typeName) {
  return typeName.endsWith('Connection');
}

export function getNodeTypeFromConnection(typeName) {
  return typeName.replace(/Connection$/, '');
}

export function camelToKebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

export function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}
