import { Test, TestingModule } from '@nestjs/testing';
import { EmployeedepartmentService } from './employeedepartment.service';

describe('ItemsService', () => {
  let service: EmployeedepartmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeedepartmentService],
    }).compile();

    service = module.get<EmployeedepartmentService>(EmployeedepartmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
