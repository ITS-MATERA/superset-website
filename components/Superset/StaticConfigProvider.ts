import { ConfigProviderInterface, DashboardConfig } from "./Types";

/**
 * Define a static config provider.
 * You must configure your visible dashboards here.
 */
class StaticConfigProvider implements ConfigProviderInterface {
  dashboards: DashboardConfig[] = [];
  homePageDashboardConfig: DashboardConfig | undefined;

  constructor(data: any[]) {
    // Iterate over the dashboards and add them to the provider
    data.forEach((dashboard: DashboardConfig) => {
      this.addDashboardConfig(dashboard);
      if (dashboard.home) {
        this.setHomePageDashboardConfig(dashboard.uuid);
      }
    });
  }

  getAllDashboards(): DashboardConfig[] {
    return this.dashboards;
  }

  /**
   * Try to set home dashboard based on first matching in slug, uuid or id specified.
   * @param identifier The slug, uuid or id of the dashboard to set as home.
   */
  setHomePageDashboardConfig(
    identifier: string | number
  ): StaticConfigProvider {
    this.homePageDashboardConfig =
      this.getDashboardConfigBySlug(String(identifier)) ||
      this.getDashboardConfigByUuid(String(identifier)) ||
      this.getDashboardConfigById(Number(identifier));

    // Check, if the dashboard is not found, throw an error.
    if (!this.homePageDashboardConfig) {
      throw new Error(`Dashboard with identifier ${identifier} not found.`);
    }
    return this;
  }

  getHomePageDashboardConfig(): DashboardConfig | undefined {
    return this.homePageDashboardConfig;
  }

  addDashboardConfig(dashboard: DashboardConfig): StaticConfigProvider {
    this.dashboards.push(dashboard);
    return this;
  }

  getDashboardConfigBySlug(slug: string): DashboardConfig | undefined {
    return this.dashboards.find((dashboard) => dashboard.slug === slug);
  }
  getDashboardConfigByUuid(uuid: string): DashboardConfig | undefined {
    return this.dashboards.find((dashboard) => dashboard.uuid === uuid);
  }
  getDashboardConfigById(id: number): DashboardConfig | undefined {
    return this.dashboards.find((dashboard) => dashboard.id === id);
  }

  getDashboardConfig(identifier: string | number): DashboardConfig | undefined {
    return (
      this.getDashboardConfigBySlug(String(identifier)) ||
      this.getDashboardConfigByUuid(String(identifier)) ||
      this.getDashboardConfigById(Number(identifier))
    );
  }

  getDashboardConfigs(): DashboardConfig[] {
    return this.dashboards;
  }
}
export default StaticConfigProvider;
