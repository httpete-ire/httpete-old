import glamorous from "glamorous";
import { mediaQueries } from "./../../config";
import { Certificate } from "crypto";

const ErrorMessage = glamorous.h1({
  fontSize: "4rem",
  padding: "20px 0",
  textAlign: "center"
});

export default ({ children }) => <ErrorMessage>{children}</ErrorMessage>;
