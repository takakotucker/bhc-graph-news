import { Color } from "@material-ui/core"
import { blue, pink, red } from "@material-ui/core/colors"
import { SvgIconProps } from "@material-ui/core/SvgIcon"
import { Home, Info, Save } from "@material-ui/icons"
import { IEnum } from "."

/**
 * Page constants
 * @author tree
 */
export class Page implements IEnum<Page> {
  /**
   * For values() array
   */
  private static _values = new Array<Page>()

  public static readonly TOP = new Page(
    1,
    "BITCOIN Cash",
    "BITCOIN Cash",
    "BITCOIN Cash | news and chart",
    "Latest news and price chart for Bitcoin cash",
    "/",
    Home,
    pink
  )
  public static readonly REDUX = new Page(
    2,
    "Redux",
    "Redux sample",
    "Redux sample | sample",
    "Basic redux examples with typescript-fsa and immer.",
    "/redux",
    Save,
    blue
  )
  public static readonly ERROR = new Page(
    99,
    "Error",
    "Error",
    "Error | error!",
    "Error.",
    "/error",
    Info,
    red
  )

  /**
   * constructor
   * @param number page id
   * @param pageTitle page title
   * @param pageDescription page description
   * @param title seo title
   * @param metaDescription seo meta description
   * @param relativeUrl relative url
   * @param icon page icon
   * @param iconColor page icon color
   */
  private constructor(
    public readonly id: number,
    public readonly pageTitle: string,
    public readonly pageDescription: string,
    public readonly title: string,
    public readonly metaDescription: string,
    public readonly relativeUrl: string,
    public readonly icon: React.ComponentType<SvgIconProps>,
    public readonly iconColor: Color
  ) {
    Page._values.push(this)
  }

  /**
   * Instance array
   */
  static get values(): Page[] {
    return this._values
  }

  /**
   * @inheritdoc
   */
  equals = (target: Page): boolean => this.id === target.id

  /**
   * @inheritdoc
   */
  toString = (): string =>
    `${this.id}, ${this.pageTitle}, ${this.pageDescription}`
}
