export enum Spacings {
  None = 0,
  Petite = 4,
  Minimal = 8,
  Compact = 16,
  Cozy = 24,
  Spacious = 32,
  Vast = 40,
  Roomy = 48,
  Oversized = 56,
  Immense = 80,
  Titanic = 144,
  Huge = 156,
}

export type SpacingType = keyof typeof Spacings;
