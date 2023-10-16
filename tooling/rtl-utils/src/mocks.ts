/**
 * reference https://github.com/testing-library/dom-testing-library/issues/558#issuecomment-1756943635
 */
class MockPointerEvent extends MouseEvent {
  public isPrimary: boolean;
  public pointerId: number;
  public pointerType: string;
  public height: number;
  public width: number;
  public tiltX: number;
  public tiltY: number;
  public twist: number;
  public pressure: number;
  public tangentialPressure: number;

  constructor(type: string, params: PointerEventInit = {}) {
    super(type, params);

    // Using defaults from W3C specs:
    // https://w3c.github.io/pointerevents/#pointerevent-interface
    this.isPrimary = params.isPrimary ?? false;
    this.pointerId = params.pointerId ?? 0;
    this.pointerType = params.pointerType ?? '';
    this.width = params.width ?? 1;
    this.height = params.height ?? 1;
    this.tiltX = params.tiltX ?? 0;
    this.tiltY = params.tiltY ?? 0;
    this.twist = params.twist ?? 0;
    this.pressure = params.pressure ?? 0;
    this.tangentialPressure = params.tangentialPressure ?? 0;
  }
}

global.PointerEvent =
  global.PointerEvent ?? (MockPointerEvent as typeof globalThis.PointerEvent);

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
