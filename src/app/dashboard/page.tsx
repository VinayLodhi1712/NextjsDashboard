"use client";

import React from "react";
import { DollarSign, Users, ShoppingCart, Package } from "lucide-react";

import Sidebar from "./components/sidebar";
import Header from "./components/header";
import StatsCard from "./components/statscards";
import AnalyticsCard from "./components/AnalyticsCard";
import ChartCard from "./components/ChartCard";
import TrafficChartCard from "./components/TrafficChartCard";
import LatestTransactions from "./components/TransactionTable";
import { generateSalesData, generateRevenueData } from "./data/data";
import {
  LineChartComponent,
  BarChartComponent,
  AreaChartComponent,
} from "./components/charts";

export default function DashboardPage() {
  // Generate dummy data
  const salesData = generateSalesData();
  const revenueData = generateRevenueData();
  const trafficMetrics = [
    { label: "New Clients", value: 9123, color: "#3b82f6" }, // Blue
    { label: "Recurring Clients", value: 22643, color: "#ef4444" }, // Red
    { label: "Page Views", value: 78623, color: "#f59e0b" }, // Yellow
    { label: "Organic", value: 49123, color: "#10b981" }, // Green
  ];

  const daysData = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ].map((day) => ({
    day,
    percentage1: Math.random() * 60 + 20,
    percentage2: Math.random() * 80 + 10,
  }));

  return (
    <div className="flex min-h-screen w-full lg:grid-cols-[280px_1fr] dark">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          {/* Stats Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Sales"
              value="$32,350.00"
              percentage="+7%"
              trend="up"
              icon={<DollarSign className="h-4 w-4 text-emerald-500 mr-2" />}
              trendColor="text-emerald-500"
              linkText={""}
              linkHref={""}
            />
            <StatsCard
              title="Total Orders"
              value="3,478"
              percentage="+11%"
              trend="up"
              icon={<ShoppingCart className="h-4 w-4 text-blue-500 mr-2" />}
              trendColor="text-blue-500"
              linkText={""}
              linkHref={""}
            />
            <StatsCard
              title="Products Sold"
              value="6,782"
              percentage="-5%"
              trend="down"
              icon={<Package className="h-4 w-4 text-orange-500 mr-2" />}
              trendColor="text-red-500"
              linkText={""}
              linkHref={""}
            />
            <StatsCard
              title="New Users"
              value="1,234"
              percentage="+13%"
              trend="up"
              icon={<Users className="h-4 w-4 text-cyan-500 mr-2" />}
              trendColor="text-emerald-500"
              linkText={""}
              linkHref={""}
            />
          </div>

          {/* KPI Cards */}
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            <AnalyticsCard
              title="Users"
              value="26K"
              percentage="12.4%"
              trend="down"
              bgColor="bg-blue-600"
              data={salesData.users}
              ChartComponent={LineChartComponent}
            />
            <AnalyticsCard
              title="Income"
              value="$6,200"
              percentage="40.9%"
              trend="up"
              bgColor="bg-teal-500"
              data={salesData.income}
              ChartComponent={LineChartComponent}
            />
            <AnalyticsCard
              title="Conversion Rate"
              value="2.49%"
              percentage="84.7%"
              trend="up"
              bgColor="bg-yellow-500"
              data={salesData.conversion}
              ChartComponent={LineChartComponent}
            />
            <AnalyticsCard
              title="Sessions"
              value="44K"
              percentage="23.6%"
              trend="down"
              bgColor="bg-red-500"
              data={salesData.sessions}
              ChartComponent={BarChartComponent}
            />
          </div>

          {/* Charts Section */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <ChartCard
              title="Area Chart representation"
              description="Orders in last 4-weeks"
              data={revenueData.areaData}
              ChartComponent={AreaChartComponent}
              colors={["#0ea5e9", "#f59e0b", "#10b981"]}
            />
            <ChartCard
              title="Bar Chart representation"
              description="Orders in last 4-weeks"
              data={revenueData.barData}
              ChartComponent={BarChartComponent}
              colors={["#0ea5e9", "#10b981", "#f59e0b"]}
            />
          </div>

          {/* Traffic Chart */}
          <div className="mt-6">
            <TrafficChartCard
              title="Traffic & Sales"
              description="January - July 2021"
              data={trafficMetrics}
              trafficData={salesData.traffic}
              daysData={daysData}
              ChartComponent={LineChartComponent}
            />
          </div>

          {/* Recent Transactions */}
          <div className="mt-6">
            <LatestTransactions />
          </div>
        </main>
      </div>
    </div>
  );
}
