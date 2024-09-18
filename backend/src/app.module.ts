import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { TeacherModule } from './teacher/teacher.module';
import { SubjectModule } from './subject/subject.module';
import { ClassModule } from './class/class.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    TeacherModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SubjectModule,
    ClassModule,
    StudentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
