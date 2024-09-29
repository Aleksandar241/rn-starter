import { FONTS, FONT_FAMILIES, FontTypes, generateFonts } from './typography';

jest.mock('@utils', () => ({
  ...jest.requireActual('@utils'),
}));

describe('generateFonts', () => {
  const prefix = FontTypes.DEFAULT;

  it('should generate correct font styles object', () => {
    const fonts = generateFonts(FONT_FAMILIES.POPPINS, prefix);

    expect(fonts).toMatchObject({
      'DEFAULT-PETITE/THIN': { fontFamily: 'Poppins-Thin', fontSize: 12 },
      'DEFAULT-PETITE/LIGHT': { fontFamily: 'Poppins-Light', fontSize: 12 },
      'DEFAULT-PETITE/REGULAR': { fontFamily: 'Poppins-Regular', fontSize: 12 },
      'DEFAULT-PETITE/MEDIUM': { fontFamily: 'Poppins-Medium', fontSize: 12 },
      'DEFAULT-PETITE/SEMI_BOLD': {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 12,
      },
      'DEFAULT-PETITE/BOLD': { fontFamily: 'Poppins-Bold', fontSize: 12 },
      'DEFAULT-PETITE/EXTRA_BOLD': {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 12,
      },
      'DEFAULT-MINIMAL/THIN': { fontFamily: 'Poppins-Thin', fontSize: 14 },
      'DEFAULT-MINIMAL/LIGHT': { fontFamily: 'Poppins-Light', fontSize: 14 },
      'DEFAULT-MINIMAL/REGULAR': {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
      },
      'DEFAULT-MINIMAL/MEDIUM': { fontFamily: 'Poppins-Medium', fontSize: 14 },
      'DEFAULT-MINIMAL/SEMI_BOLD': {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
      },
      'DEFAULT-MINIMAL/BOLD': { fontFamily: 'Poppins-Bold', fontSize: 14 },
      'DEFAULT-MINIMAL/EXTRA_BOLD': {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 14,
      },
      'DEFAULT-COMPACT/THIN': { fontFamily: 'Poppins-Thin', fontSize: 16 },
      'DEFAULT-COMPACT/LIGHT': { fontFamily: 'Poppins-Light', fontSize: 16 },
      'DEFAULT-COMPACT/REGULAR': {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
      },
      'DEFAULT-COMPACT/MEDIUM': { fontFamily: 'Poppins-Medium', fontSize: 16 },
      'DEFAULT-COMPACT/SEMI_BOLD': {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
      },
      'DEFAULT-COMPACT/BOLD': { fontFamily: 'Poppins-Bold', fontSize: 16 },
      'DEFAULT-COMPACT/EXTRA_BOLD': {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 16,
      },
      'DEFAULT-COZY/THIN': { fontFamily: 'Poppins-Thin', fontSize: 18 },
      'DEFAULT-COZY/LIGHT': { fontFamily: 'Poppins-Light', fontSize: 18 },
      'DEFAULT-COZY/REGULAR': { fontFamily: 'Poppins-Regular', fontSize: 18 },
      'DEFAULT-COZY/MEDIUM': { fontFamily: 'Poppins-Medium', fontSize: 18 },
      'DEFAULT-COZY/SEMI_BOLD': {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
      },
      'DEFAULT-COZY/BOLD': { fontFamily: 'Poppins-Bold', fontSize: 18 },
      'DEFAULT-COZY/EXTRA_BOLD': {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 18,
      },
      'DEFAULT-SPACIOUS/THIN': { fontFamily: 'Poppins-Thin', fontSize: 20 },
      'DEFAULT-SPACIOUS/LIGHT': { fontFamily: 'Poppins-Light', fontSize: 20 },
      'DEFAULT-SPACIOUS/REGULAR': {
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
      },
      'DEFAULT-SPACIOUS/MEDIUM': { fontFamily: 'Poppins-Medium', fontSize: 20 },
      'DEFAULT-SPACIOUS/SEMI_BOLD': {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
      },
      'DEFAULT-SPACIOUS/BOLD': { fontFamily: 'Poppins-Bold', fontSize: 20 },
      'DEFAULT-SPACIOUS/EXTRA_BOLD': {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 20,
      },
      'DEFAULT-VAST/THIN': { fontFamily: 'Poppins-Thin', fontSize: 22 },
      'DEFAULT-VAST/LIGHT': { fontFamily: 'Poppins-Light', fontSize: 22 },
      'DEFAULT-VAST/REGULAR': { fontFamily: 'Poppins-Regular', fontSize: 22 },
      'DEFAULT-VAST/MEDIUM': { fontFamily: 'Poppins-Medium', fontSize: 22 },
      'DEFAULT-VAST/SEMI_BOLD': {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
      },
      'DEFAULT-VAST/BOLD': { fontFamily: 'Poppins-Bold', fontSize: 22 },
      'DEFAULT-VAST/EXTRA_BOLD': {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 22,
      },
    });
  });

  it('should generate a FONTS object with expected values', () => {
    expect(FONTS).toMatchObject(
      generateFonts(FONT_FAMILIES.POPPINS, FontTypes.DEFAULT),
    );
  });
});
