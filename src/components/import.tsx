"use client";

export default function ImportServicePage() {
  return (
    <section className="w-full bg-surface py-16 lg:py-24">
      {/* OUTER CONTAINER – matches site-wide responsiveness */}
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">
        
        {/* INNER CONTENT */}
        <div className="mx-auto flex flex-col gap-10">
          
          {/* Title */}
          <div className="flex flex-col items-start text-left gap-6">
            <h1 className="text-h1 text-neutral">Importation</h1>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-6 text-left w-full text-neutral">
            <p>
              Navigating the complexities of international trade requires more than just transport; 
              it requires a strategic partner. At <strong>Richmind Logistics</strong>, we provide a 
              seamless bridge between your global suppliers and your local destination. Our 
              end-to-end import solutions are engineered to eliminate bottlenecks, reduce overhead, 
              and ensure your inventory arrives exactly when you need it.
            </p>

            {/* SECTION 1 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                1. Proactive Vendor Coordination
              </h3>
              <p>
                Managing international suppliers can be challenging due to time zones, language 
                barriers, and varying business practices. We act as your “boots on the ground,” 
                communicating directly with your vendors to:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>Verify production timelines and ready-dates.</li>
                <li>Ensure all export packaging meets international shipping standards.</li>
                <li>Validate shipping marks and labels to prevent sorting errors at arrival ports.</li>
              </ul>
            </div>

            {/* SECTION 2 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                2. Advanced Customs Compliance & Documentation
              </h3>
              <p>
                Minor paperwork errors can lead to costly storage fees or legal complications. 
                Our compliance experts take the guesswork out of the regulatory landscape by:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Classification & Valuation:</strong> Ensuring correct Harmonized System (HS) 
                  codes are used to minimize duty costs while maintaining full legal compliance.
                </li>
                <li>
                  <strong>Document Preparation:</strong> Managing Bills of Lading, Commercial Invoices, 
                  and Certificates of Origin with meticulous detail.
                </li>
                <li>
                  <strong>Pre-Clearance:</strong> Initiating the customs process while your cargo is 
                  still in transit to accelerate release upon arrival.
                </li>
              </ul>
            </div>

            {/* SECTION 3 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                3. End-to-End Visibility & Real-Time Intelligence
              </h3>
              <p>
                Information is just as important as the cargo itself. We provide a transparent 
                window into your supply chain so you are never left guessing.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Milestone Tracking:</strong> Automated alerts for pickup, departure, 
                  customs clearance, and final delivery.
                </li>
                <li>
                  <strong>Dedicated Account Support:</strong> Direct access to a logistics specialist 
                  who understands your business.
                </li>
              </ul>
            </div>

            {/* SECTION 4 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                4. Strategic Risk Mitigation
              </h3>
              <p>
                Global logistics is subject to variables like port congestion, labor strikes, and 
                volatile weather. We don’t just react to problems — we anticipate them.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Route Optimization:</strong> Selecting the most reliable and cost-effective 
                  shipping lanes.
                </li>
                <li>
                  <strong>Contingency Planning:</strong> Rerouting cargo through alternative ports or 
                  transport modes when disruptions occur.
                </li>
              </ul>
            </div>

            {/* SECTION 5 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                5. Seamless Final Mile Delivery
              </h3>
              <p>
                The journey doesn’t end at the port. We oversee the final leg to ensure your goods 
                arrive in perfect condition.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Drayage & Transloading:</strong> Efficient container movement from terminal 
                  to warehouse.
                </li>
                <li>
                  <strong>Last-Mile Scheduling:</strong> Delivery coordination aligned with your 
                  staffing and storage capacity.
                </li>
              </ul>
            </div>

            {/* WHY CHOOSE */}
            <div className="mt-16 flex flex-col gap-4 pt-4">
              <h3 className="text-h3 text-neutral">
                Why Choose Richmind Logistics?
              </h3>

              <ul className="list-disc list-inside flex flex-col gap-3">
                <li>
                  <strong>Tailored Solutions:</strong> Custom workflows designed around your volume, 
                  budget, and urgency.
                </li>
                <li>
                  <strong>Proven Reliability:</strong> A strong track record of on-time, in-full deliveries.
                </li>
                <li>
                  <strong>Cost-Efficiency Focus:</strong> Optimized landed costs through smarter routing 
                  and duty management.
                </li>
                <li>
                  <strong>Uncompromising Care:</strong> Precision handling for every type of cargo.
                </li>
                <li>
                  <strong>Scalability:</strong> Infrastructure that grows with your business.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
