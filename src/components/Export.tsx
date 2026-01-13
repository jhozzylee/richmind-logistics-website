"use client";

export default function ExportServicePage() {
  return (
    <section className="w-full bg-surface py-16 lg:py-24">
      {/* OUTER CONTAINER – matches site-wide responsiveness */}
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">
        
        {/* INNER CONTENT */}
        <div className="mx-auto flex flex-col gap-10">
          
          {/* Title */}
          <div className="flex flex-col items-start text-left gap-6">
            <h1 className="text-h1 text-neutral">Exportation</h1>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-6 text-left w-full text-neutral">
            <p>
              Expanding your business into international markets is a major milestone. 
              At <strong>Richmind Logistics</strong>, we turn the complexity of global 
              distribution into a competitive advantage. Our export services are designed 
              to protect your bottom line, safeguard your cargo, and ensure your brand’s 
              promise of timely delivery is met — no matter where in the world your 
              customers are located.
            </p>

            {/* SECTION 1 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                1. Full-Lifecycle Export Coordination
              </h3>
              <p>
                We take ownership of the export process from the moment a purchase order 
                is placed. Our team manages the intricate logistics “handshakes” required 
                to move goods from your facility to your international clients.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Inland Drayage:</strong> Seamless movement from your warehouse 
                  to the port or airport.
                </li>
                <li>
                  <strong>Freight Booking:</strong> Leveraging deep carrier relationships 
                  to secure space and competitive rates, even during peak seasons.
                </li>
                <li>
                  <strong>Intermodal Flexibility:</strong> Selecting air, sea, or land 
                  transport based on budget and urgency.
                </li>
              </ul>
            </div>

            {/* SECTION 2 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                2. Regulatory Expertise & Trade Compliance
              </h3>
              <p>
                Exporting involves navigating complex international trade laws and 
                licensing requirements. We act as your compliance shield by:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>AES / EEI Filings:</strong> Accurate and timely submission of 
                  Electronic Export Information.
                </li>
                <li>
                  <strong>Export Licensing:</strong> Assistance with permits for restricted 
                  or specialized goods.
                </li>
                <li>
                  <strong>Incoterms® Guidance:</strong> Advising on contract terms that 
                  clearly define responsibility and minimize risk.
                </li>
              </ul>
            </div>

            {/* SECTION 3 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                3. Premium Cargo Protection & Security
              </h3>
              <p>
                International transit can be demanding. We ensure your cargo arrives 
                in the same condition it left your facility.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Specialized Packaging & Crating:</strong> Export-grade solutions 
                  built for long-haul transport.
                </li>
                <li>
                  <strong>Load Supervision:</strong> Proper container balancing and securing 
                  to prevent damage.
                </li>
                <li>
                  <strong>Cargo Insurance Options:</strong> Comprehensive coverage plans 
                  for peace of mind.
                </li>
              </ul>
            </div>

            {/* SECTION 4 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                4. Optimized Speed-to-Market
              </h3>
              <p>
                In a global economy, speed is a competitive advantage. We help you move 
                faster through:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Direct Routing:</strong> Fewer transshipment points to reduce 
                  delays.
                </li>
                <li>
                  <strong>Carrier Diversification:</strong> Access to a wide network of 
                  vessels and flights for faster departures.
                </li>
              </ul>
            </div>

            {/* SECTION 5 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                5. Transparent Reporting & Milestone Tracking
              </h3>
              <p>
                Accurate data keeps your customers informed and confident. Our framework 
                includes:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Real-Time Status Updates:</strong> Notifications from “Loaded on 
                  Board” to final arrival.
                </li>
                <li>
                  <strong>Digital Document Access:</strong> Secure availability of invoices, 
                  packing lists, and Bills of Lading.
                </li>
              </ul>
            </div>

            {/* WHY CHOOSE */}
            <div className="mt-16 flex flex-col gap-4 pt-4">
              <h3 className="text-h3 text-neutral">
                Why Choose Richmind Logistics for Your Exports?
              </h3>

              <ul className="list-disc list-inside flex flex-col gap-3">
                <li>
                  <strong>Global Reach, Local Expertise:</strong> International agent network 
                  with deep destination knowledge.
                </li>
                <li>
                  <strong>Compliance-First Culture:</strong> Rigorous attention to trade laws 
                  and documentation.
                </li>
                <li>
                  <strong>Reduced Operational Friction:</strong> We function as your outsourced 
                  export department.
                </li>
                <li>
                  <strong>Commitment to Integrity:</strong> Every shipment reflects your brand’s 
                  standards.
                </li>
                <li>
                  <strong>Customizable Scalability:</strong> From single LCL shipments to global 
                  distribution rollouts.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
