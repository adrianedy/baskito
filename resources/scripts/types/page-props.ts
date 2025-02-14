// import { RoleType } from "@/scripts/utils/role"; // uncomment this line to use RoleType

declare module "@inertiajs/core" {
  interface PageProps {
    flash: FlashMessage,
    auth?: AuthProps,
  }
}

export type FlashMessage = {
  message: null | string,
}

export type AuthProps = {
  user: {
    id: number,
    name: string,
    email: string,
    // role: RoleType,
  },
}
