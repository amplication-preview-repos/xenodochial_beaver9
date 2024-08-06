/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Session as PrismaSession,
  AppUser as PrismaAppUser,
} from "@prisma/client";
import { SessionCreateInput } from "./SessionCreateInput";
import { Session } from "./Session";
import { SessionWhereUniqueInput } from "./SessionWhereUniqueInput";
import { SessionUpdateInput } from "./SessionUpdateInput";

export class SessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SessionCountArgs, "select">): Promise<number> {
    return this.prisma.session.count(args);
  }

  async sessions(args: Prisma.SessionFindManyArgs): Promise<PrismaSession[]> {
    return this.prisma.session.findMany(args);
  }
  async session(
    args: Prisma.SessionFindUniqueArgs
  ): Promise<PrismaSession | null> {
    return this.prisma.session.findUnique(args);
  }
  async createSession(args: Prisma.SessionCreateArgs): Promise<PrismaSession> {
    return this.prisma.session.create(args);
  }
  async updateSession(args: Prisma.SessionUpdateArgs): Promise<PrismaSession> {
    return this.prisma.session.update(args);
  }
  async deleteSession(args: Prisma.SessionDeleteArgs): Promise<PrismaSession> {
    return this.prisma.session.delete(args);
  }

  async getAppUser(parentId: string): Promise<PrismaAppUser | null> {
    return this.prisma.session
      .findUnique({
        where: { id: parentId },
      })
      .appUser();
  }
  async CreateSession(args: SessionCreateInput): Promise<Session> {
    throw new Error("Not implemented");
  }
  async DeleteSession(args: SessionWhereUniqueInput): Promise<boolean> {
    throw new Error("Not implemented");
  }
  async GetSession(args: SessionWhereUniqueInput): Promise<Session> {
    throw new Error("Not implemented");
  }
  async UpdateSession(args: SessionUpdateInput): Promise<Session> {
    throw new Error("Not implemented");
  }
}
