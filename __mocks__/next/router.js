// __mocks__/next/router.js

export const useRouter = jest.fn(() => ({
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  route: "/",
  pathname: "",
  query: {},
  asPath: "",
}));
