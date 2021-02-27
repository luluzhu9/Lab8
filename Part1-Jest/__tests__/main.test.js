const formatVolumeIconPath = require('../assets/scripts/main');

test('volume value over 66', () => {
    expect(formatVolumeIconPath(67)).toBe(`./assets/media/icons/volume-level-3.svg`);
});

test('volume value over 33', () => {
    expect(formatVolumeIconPath(34)).toBe(`./assets/media/icons/volume-level-2.svg`);
});

test('volume value over 0', () => {
    expect(formatVolumeIconPath(1)).toBe(`./assets/media/icons/volume-level-1.svg`);
});

test('else case', () => {
    expect(formatVolumeIconPath(-1)).toBe(`./assets/media/icons/volume-level-0.svg`);
});