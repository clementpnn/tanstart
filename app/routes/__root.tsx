import { createRootRoute, Outlet } from "@tanstack/react-router"

export const Route = createRootRoute({
  component: () => (
    <Outlet />
  ),
  notFoundComponent: () => {
    return <div>404</div>
  },
})