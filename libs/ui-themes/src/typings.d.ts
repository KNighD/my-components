export interface ThemeType {
  palette: Record<string, string>;
  status: Record<string, string>;
  btn: {
    fontWeight: number;
    lineHeight: string;
    fontFamily: string;
  };
}
