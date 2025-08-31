import React from "react";
import App from "./../app.jsx";
import { Navigate } from "react-router-dom";

import Dashboard from "./../pages/dashboard/dashboard.jsx";
import Analytics from "./../pages/analytics/analytics.jsx";
import EmailInbox from "./../pages/email/inbox.jsx";
import EmailCompose from "./../pages/email/compose.jsx";
import EmailDetail from "./../pages/email/detail.jsx";
import Widgets from "./../pages/widgets/widgets.jsx";
import AiChat from "./../pages/ai/chat.jsx";
import AiImageGenerator from "./../pages/ai/image-generator.jsx";
import PosCustomerOrder from "./../pages/pos/customer-order.jsx";
import PosKitchenOrder from "./../pages/pos/kitchen-order.jsx";
import PosCounterCheckout from "./../pages/pos/counter-checkout.jsx";
import PosTableBooking from "./../pages/pos/table-booking.jsx";
import PosMenuStock from "./../pages/pos/menu-stock.jsx";
import UiBootstrap from "./../pages/ui/bootstrap.jsx";
import UiButtons from "./../pages/ui/buttons.jsx";
import UiCard from "./../pages/ui/card.jsx";
import UiIcons from "./../pages/ui/icons.jsx";
import UiModalNotifications from "./../pages/ui/modal-notifications.jsx";
import UiTypography from "./../pages/ui/typography.jsx";
import UiTabsAccordions from "./../pages/ui/tabs-accordions.jsx";
import FormElements from "./../pages/form/elements.jsx";
import FormPlugins from "./../pages/form/plugins.jsx";
import FormWizards from "./../pages/form/wizards.jsx";
import TableElements from "./../pages/table/elements.jsx";
import TablePlugins from "./../pages/table/plugins.jsx";
import ChartJs from "./../pages/charts/js.jsx";
import ChartApex from "./../pages/charts/apex.jsx";
import Map from "./../pages/map/map.jsx";
import LayoutStarter from "./../pages/layout/starter.jsx";
import LayoutFixedFooter from "./../pages/layout/fixed-footer.jsx";
import LayoutFullHeight from "./../pages/layout/full-height.jsx";
import LayoutFullWidth from "./../pages/layout/full-width.jsx";
import LayoutBoxedLayout from "./../pages/layout/boxed-layout.jsx";
import LayoutCollapsedSidebar from "./../pages/layout/collapsed-sidebar.jsx";
import LayoutTopNav from "./../pages/layout/top-nav.jsx";
import LayoutMixedNav from "./../pages/layout/mixed-nav.jsx";
import LayoutMixedNavBoxedLayout from "./../pages/layout/mixed-nav-boxed-layout.jsx";
import PagesScrumBoard from "./../pages/pages/scrum-board.jsx";
import PagesProducts from "./../pages/pages/products.jsx";
import PagesProductDetails from "./../pages/pages/product-details.jsx";
import PagesOrders from "./../pages/pages/orders.jsx";
import PagesOrderDetails from "./../pages/pages/order-details.jsx";
import PagesGallery from "./../pages/pages/gallery.jsx";
import PagesSearchResults from "./../pages/pages/search-results.jsx";
import PagesComingSoon from "./../pages/pages/coming-soon.jsx";
import PagesError from "./../pages/pages/error.jsx";
import PagesLogin from "./../pages/pages/login.jsx";
import PagesRegister from "./../pages/pages/register.jsx";
import PagesMessenger from "./../pages/pages/messenger.jsx";
import PagesDataManagement from "./../pages/pages/data-management.jsx";
import PagesFileManager from "./../pages/pages/file-manager.jsx";
import PagesPricing from "./../pages/pages/pricing.jsx";
import Landing from "./../pages/landing/landing.jsx";
import Profile from "./../pages/profile/profile.jsx";
import Calendar from "./../pages/calendar/calendar.jsx";
import Settings from "./../pages/settings/settings.jsx";
import Helper from "./../pages/helper/helper.jsx";

const AppRoute = [
  {
    path: "*",
    element: <App />,
    children: [
      { path: "", element: <Navigate to="/dashboard" /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "analytics", element: <Analytics /> },
      {
        path: "email/*",
        children: [
          { path: "inbox", element: <EmailInbox /> },
          { path: "compose", element: <EmailCompose /> },
          { path: "detail", element: <EmailDetail /> },
        ],
      },
      { path: "widgets", element: <Widgets /> },
      {
        path: "ai/*",
        children: [
          { path: "chat", element: <AiChat /> },
          { path: "image-generator", element: <AiImageGenerator /> },
        ],
      },
      {
        path: "pos/*",
        children: [
          { path: "customer-order", element: <PosCustomerOrder /> },
          { path: "kitchen-order", element: <PosKitchenOrder /> },
          { path: "counter-checkout", element: <PosCounterCheckout /> },
          { path: "table-booking", element: <PosTableBooking /> },
          { path: "menu-stock", element: <PosMenuStock /> },
        ],
      },
      {
        path: "ui/*",
        children: [
          { path: "bootstrap", element: <UiBootstrap /> },
          { path: "buttons", element: <UiButtons /> },
          { path: "card", element: <UiCard /> },
          { path: "icons", element: <UiIcons /> },
          { path: "modal-notifications", element: <UiModalNotifications /> },
          { path: "typography", element: <UiTypography /> },
          { path: "tabs-accordions", element: <UiTabsAccordions /> },
        ],
      },
      {
        path: "form/*",
        children: [
          { path: "elements", element: <FormElements /> },
          { path: "plugins", element: <FormPlugins /> },
          { path: "wizards", element: <FormWizards /> },
        ],
      },
      {
        path: "table/*",
        children: [
          { path: "elements", element: <TableElements /> },
          { path: "plugins", element: <TablePlugins /> },
        ],
      },
      {
        path: "chart/*",
        children: [
          { path: "chart-js", element: <ChartJs /> },
          { path: "chart-apex", element: <ChartApex /> },
        ],
      },
      {
        path: "layout/*",
        children: [
          { path: "starter-page", element: <LayoutStarter /> },
          { path: "fixed-footer", element: <LayoutFixedFooter /> },
          { path: "full-height", element: <LayoutFullHeight /> },
          { path: "full-width", element: <LayoutFullWidth /> },
          { path: "boxed-layout", element: <LayoutBoxedLayout /> },
          { path: "collapsed-sidebar", element: <LayoutCollapsedSidebar /> },
          { path: "top-nav", element: <LayoutTopNav /> },
          { path: "mixed-nav", element: <LayoutMixedNav /> },
          {
            path: "mixed-nav-boxed-layout",
            element: <LayoutMixedNavBoxedLayout />,
          },
        ],
      },
      {
        path: "pages/*",
        children: [
          { path: "scrum-board", element: <PagesScrumBoard /> },
          { path: "products", element: <PagesProducts /> },
          { path: "product-details", element: <PagesProductDetails /> },
          { path: "orders", element: <PagesOrders /> },
          { path: "order-details", element: <PagesOrderDetails /> },
          { path: "gallery", element: <PagesGallery /> },
          { path: "search-results", element: <PagesSearchResults /> },
          { path: "coming-soon", element: <PagesComingSoon /> },
          { path: "error", element: <PagesError /> },
          { path: "login", element: <PagesLogin /> },
          { path: "register", element: <PagesRegister /> },
          { path: "messenger", element: <PagesMessenger /> },
          { path: "data-management", element: <PagesDataManagement /> },
          { path: "file-manager", element: <PagesFileManager /> },
          { path: "pricing", element: <PagesPricing /> },
        ],
      },
      { path: "map", element: <Map /> },
      { path: "landing", element: <Landing /> },
      { path: "profile", element: <Profile /> },
      { path: "calendar", element: <Calendar /> },
      { path: "settings", element: <Settings /> },
      { path: "helper", element: <Helper /> },
      { path: "*", element: <PagesError /> },
    ],
  },
];

export default AppRoute;
