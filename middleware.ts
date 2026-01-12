import type { NextRequest } from "next/server"
import createIntlMiddleware from "next-intl/middleware"

import { routing } from "@/i18n/routing"
import { updateSession } from "@/lib/supabase/proxy"

const intlMiddleware = createIntlMiddleware(routing)

export async function middleware(request: NextRequest) {
  const intlResponse = intlMiddleware(request)

  if (intlResponse.headers.get("location")) {
    return intlResponse
  }

  return updateSession(request)
}

export const config = {
  matcher: [
    "/((?!api|_next|.*\\..*).*)",
  ],
}