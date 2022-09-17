import { Test, TestingModule } from '@nestjs/testing';
import { EmployeedepartmentController } from './employeedepartment.controller';

describe('EmployeedepartmentController', () => {
  let controller: EmployeedepartmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeedepartmentController],
    }).compile();

    controller = module.get<EmployeedepartmentController>(EmployeedepartmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
