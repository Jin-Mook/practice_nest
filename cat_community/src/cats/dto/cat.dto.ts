import { Cat } from './../cats.schema';
import { ApiProperty, PickType } from '@nestjs/swagger';

// 필요한 프로퍼티만 상속받기 위해 nestjs/swagger에서 picktype메서드를 제공한다.
// 참고로 필요 없는 프로퍼티를 제거하기 위한 메서드도 있다... 일단 강의에서는 omittype메서드라고 얘기함.
export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: '1234',
    description: 'email',
    required: true,
  })
  id: string;
}
