export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  meta: string;
  tag: string;
}

export interface PortfolioRow {
  id: string;
  title: string;
  items: PortfolioItem[];
}
