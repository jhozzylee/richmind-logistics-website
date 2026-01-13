"use client";

export default function CustomsClearanceServicePage() {
  return (
    <section className="w-full bg-surface py-16 lg:py-24">
      {/* OUTER CONTAINER – matches site-wide responsiveness */}
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">
        
        {/* INNER CONTENT */}
        <div className="mx-auto flex flex-col gap-10">
          
          {/* Title */}
          <div className="flex flex-col items-start text-left gap-6">
            <h1 className="text-h1 text-neutral">
              Strategic Customs Brokerage & Regulatory Compliance
            </h1>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-6 text-left w-full text-neutral">
            <p>
              International borders shouldn’t be a barrier to your business. At
              <strong> Richmind Logistics</strong>, we act as your expert liaison with
              customs authorities worldwide. Our Customs Clearance Services ensure
              your cargo is classified correctly, duties are optimized, and shipments
              pass checkpoints without costly delays or non-compliance.
            </p>

            {/* SECTION 1 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                1. Precision Documentation & Classification
              </h3>
              <p>
                The difference between smooth delivery and a multi-week delay is often
                a single line of text. We take the technical burden off your shoulders.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>HS Code Optimization:</strong> Correct Harmonized System
                  codes to avoid overpaying duties while remaining compliant.
                </li>
                <li>
                  <strong>Accuracy Audits:</strong> Cross-referencing invoices,
                  packing lists, and certificates to eliminate inspection triggers.
                </li>
                <li>
                  <strong>Electronic Data Interchange (EDI):</strong> Advanced digital
                  filing systems reduce manual error and speed processing.
                </li>
              </ul>
            </div>

            {/* SECTION 2 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">2. Duty & Tax Management</h3>
              <p>
                We don’t just clear your goods; we help protect your bottom line.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Tariff Engineering:</strong> Adjust shipping or packaging to
                  qualify for lower tariff rates.
                </li>
                <li>
                  <strong>Trade Agreement Leveraging:</strong> Maximize benefits from
                  Free Trade Agreements (FTAs).
                </li>
                <li>
                  <strong>Duty Drawback Assistance:</strong> Reclaim paid duties for
                  re-exported goods.
                </li>
              </ul>
            </div>

            {/* SECTION 3 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">3. Pre-Clearance & Rapid Processing</h3>
              <p>
                Why wait for cargo arrival? Our proactive strategies keep your supply
                chain moving.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Arrival Pre-filing:</strong> Initiate clearance while cargo
                  is in transit, often securing release before docking.
                </li>
                <li>
                  <strong>Port & Border Liaison:</strong> Local agents resolve queries
                  in real-time.
                </li>
              </ul>
            </div>

            {/* SECTION 4 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">4. Specialized Regulatory Support</h3>
              <p>
                Some cargo requires special handling. We manage regulatory complexities
                for:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li><strong>Food & Agricultural Products:</strong> Health & safety compliance.</li>
                <li><strong>High-Tech & Electronics:</strong> Export controls and valuations.</li>
                <li><strong>Dangerous Goods (DG):</strong> Hazardous material documentation and safety.</li>
              </ul>
            </div>

            {/* SECTION 5 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                5. Post-Entry Audit & Compliance Reporting
              </h3>
              <p>
                Our job continues after the gate opens, providing a digital trail
                that protects your business.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Digital Record Keeping:</strong> Secure archives of all
                  customs entries and communications.
                </li>
                <li>
                  <strong>Compliance Consulting:</strong> Updates on changing trade
                  laws, sanctions, and tariffs.
                </li>
              </ul>
            </div>

            {/* WHY CHOOSE */}
            <div className="flex flex-col gap-4 pt-4">
              <h3 className="text-h3 text-neutral">
                Why Choose Richmind Logistics for Customs Clearance?
              </h3>
              <ul className="list-disc list-inside flex flex-col gap-3">
                <li>
                  <strong>Zero-Tolerance for Errors:</strong> Industry-leading accuracy,
                  protecting you from fines or blacklisting.
                </li>
                <li>
                  <strong>Financial Advocacy:</strong> Ensuring you pay the legal minimum
                  in duties and taxes.
                </li>
                <li>
                  <strong>Local Knowledge, Global Standards:</strong> Anticipate and bypass
                  local bottlenecks with our worldwide network.
                </li>
                <li>
                  <strong>Stress Reduction:</strong> Peace of mind knowing experts handle
                  the regulatory heavy lifting.
                </li>
                <li>
                  <strong>Transparent Communication:</strong> Immediate updates and
                  actionable solutions for any customs queries.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
