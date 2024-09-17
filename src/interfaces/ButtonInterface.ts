export interface ButtonInterface {
  text: string;
  variant: "text" | "outlined" | "contained"; // Varianti accettate da Material UI
  path: string; //inserire la rotta al onClick del Button
}
