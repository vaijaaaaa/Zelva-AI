import React from 'react';

export const Testimonials: React.FC = () => {
  const useCases = [
    { title: "Inventory Sync", desc: "Real-time stock across all channels" },
    { title: "Customer 360", desc: "Unified profile from email, sales, & support" },
    { title: "Automated Billing", desc: "Recurring invoices and tax calculation" },
    { title: "Supply Chain", desc: "Track logistics from factory to door" },
    { title: "Staff Portals", desc: "Role-based access for internal teams" },
    { title: "Analytics", desc: "Custom BI dashboards for executives" },
  ];

  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
             <div>
                <div className="inline-block bg-black text-white px-2 py-1 text-xs font-mono font-bold uppercase mb-4 tracking-widest">
                    Capabilities \\
                </div>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    Solving complex problems <span className="opacity-50">— with elegant, scalable code</span>
                </h2>
            </div>
        </div>

        {/* Use Cases List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-b border-black/10">
            {useCases.map((uc, i) => (
                <div key={i} className="border-r border-black/10 p-6 hover:bg-black/5 transition-colors cursor-pointer group last:border-r-0">
                    <div className="font-mono text-xs font-bold uppercase mb-2 group-hover:text-orange-600">{uc.title}</div>
                    <div className="text-sm text-zinc-600 leading-tight">{uc.desc}</div>
                </div>
            ))}
        </div>

        {/* Code Example Area - CRM Object */}
        <div className="grid md:grid-cols-2 gap-2 mt-2">
            <div className="bg-[#f4f4f5] rounded-xl p-8 min-h-[300px] font-mono text-sm">
                <div className="text-xs text-zinc-400 mb-4">Input: Customer Action</div>
                <p className="text-zinc-600">
                    User "Sarah J." completes checkout on Shopify store. <br/><br/>
                    <strong>Trigger:</strong> 'checkout.completed' webhook fired. <br/>
                    <strong>Goal:</strong> Sync data to custom CRM, update inventory in ERP, and schedule follow-up email.
                </p>
            </div>
            <div className="bg-[#18181b] text-white rounded-xl p-8 min-h-[300px] font-mono text-sm border border-black overflow-x-auto">
                <div className="text-xs text-orange-500 mb-4">Output: Unified Data Object</div>
                <pre className="text-zinc-300">
{`{
  "customer_id": "cust_8921",
  "lifetime_value": 4500.00,
  "segments": ["VIP", "High_Intent"],
  "last_order": {
    "id": "ord_5521",
    "total": 120.50,
    "status": "processing"
  },
  "next_action": "schedule_loyalty_email"
}`}
                </pre>
            </div>
        </div>

      </div>
    </section>
  );
};