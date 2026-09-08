/**
 * Asset base resolver. Card HTML and UI-kit screens live two levels below the project root, so the
 * default is document-relative '../../assets'. Override before mounting when the depth differs:
 *   window.IKKEN_ASSETS = 'assets';
 */
export function assetBase() {
  return (typeof window !== 'undefined' && window.IKKEN_ASSETS) || '../../assets';
}
