import { JointModule } from './joint.module';

describe('JointModule', () => {
  let jointModule: JointModule;

  beforeEach(() => {
    jointModule = new JointModule();
  });

  it('should create an instance', () => {
    expect(jointModule).toBeTruthy();
  });
});
