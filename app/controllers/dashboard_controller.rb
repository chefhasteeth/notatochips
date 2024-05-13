class DashboardController < AuthenticatedController
  def index
    render inertia: "dashboard/index"
  end
end
