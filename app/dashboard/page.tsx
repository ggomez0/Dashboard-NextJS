import { Card } from '@/app/dashboard/cards';
import RevenueChart from '@/app/dashboard/revenue-chart';
import LatestInvoices from '@/app/dashboard/latest-invoices';
import { inter } from '@/app/ui/fonts';
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '@/app/lib/data';

export default async function Page() {
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    const Invoices = await fetchCardData();

  return (
    <main>
      <h1 className={`${inter.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Pagado" value={Invoices.totalPaidInvoices} type="collected" /> 
        <Card title="Pendiente" value={Invoices.totalPendingInvoices} type="pending" /> 
        <Card title="Total Invoices" value={Invoices.numberOfInvoices} type="invoices" /> 
        <Card
          title="Total Customers"
          value={Invoices.numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue}  />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}