export interface ThemeType {
  palette: Record<string, string>;
  colors: Record<string, string>;
  body: {
    color: string;
  };
  btn: {
    fontWeight: number;
    lineHeight: string;
    fontFamily: string;
    borderWidth: string;
    paddingX: string;
    paddingY: string;
    fontSize: string;
    borderRadius: string;
    boxShadow: string;
    transition: string;
  };
}
