import { WarningModule } from './warning.module';

describe('WarningModule', () => {
  let warningModule: WarningModule;

  beforeEach(() => {
    warningModule = new WarningModule();
  });

  it('should create an instance', () => {
    expect(warningModule).toBeTruthy();
  });
});
