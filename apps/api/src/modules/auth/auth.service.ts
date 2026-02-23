import { prisma } from "../../lib/prisma";
import type { LoginType, RegisterType } from "./auth.schema";
import bcrypt from "bcrypt";

export const checkEmail = async (email: string) => {
  try {
    const emailExsists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (emailExsists) {
      return true;
    }

    return false;
  } catch (error) {
    throw error;
  }
};

export const RegisterService = async (data: RegisterType) => {
  try {
    const { username, email, password } = data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: username,
        email: email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    });

    return user;
  } catch (error) {
    throw error;
  }
};


export const LoginService = async (data: LoginType) => {
  try {
    const {
      email,
      password
    } = data

    const user = await prisma.user.findUnique({
      where: {
        email,
      }
    })

    if(!user){
      throw new Error("NO_USER_FOUND")
    }

    const decodedPassword = await bcrypt.compare(password, user.password)

    if(!decodedPassword){
        throw new Error("INVALID_CREDENTIALS")
    }

    return user
  } catch (error) {
    throw error
  }
} 