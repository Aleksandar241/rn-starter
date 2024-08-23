export enum Radius {
  None = 0,
  Petite = 4,
  Minimal = 8,
  Compact = 16,
  Cozy = 24,
  Spacious = 32,
}

export type RadiusType = keyof typeof Radius;
