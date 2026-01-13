"use client";

export default function WarehousingServicePage() {
  return (
    <section className="w-full bg-surface py-16 lg:py-24">
      {/* OUTER CONTAINER – matches site-wide responsiveness */}
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">
        
        {/* INNER CONTENT */}
        <div className="mx-auto flex flex-col gap-10">
          
          {/* Title */}
          <div className="flex flex-col items-start text-left gap-6">
            <h1 className="text-h1 text-neutral">
              Warehousing & Inventory Management
            </h1>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-6 text-left w-full text-neutral">
            <p>
              A warehouse should be more than storage — it should be a catalyst for business growth.
              At <strong>Richmind Logistics</strong>, our warehousing solutions combine secure physical
              infrastructure with digital intelligence to help you manage inventory with precision.
              Our modern facilities adapt to your inventory cycles, ensuring products are always
              ready for the next stage of their journey.
            </p>

            {/* SECTION 1 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                1. Secure, State-of-the-Art Facilities
              </h3>
              <p>
                Your inventory represents a significant capital investment. We protect it with
                advanced security systems and controlled environments.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>24/7 Surveillance:</strong> Continuous monitoring with CCTV, motion sensors,
                  and controlled access protocols.
                </li>
                <li>
                  <strong>Climate-Controlled Options:</strong> Specialized environments for
                  pharmaceuticals, electronics, perishables, and sensitive goods.
                </li>
                <li>
                  <strong>Fire Suppression & Safety:</strong> Modern fire systems and routine safety
                  audits across all facilities.
                </li>
              </ul>
            </div>

            {/* SECTION 2 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                2. Intelligent Inventory Management (WMS)
              </h3>
              <p>
                We eliminate storage blind spots through a robust Warehouse Management System (WMS),
                giving you complete visibility into your inventory.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Real-Time Tracking:</strong> View stock levels, locations, and movement
                  history instantly.
                </li>
                <li>
                  <strong>SKU-Level Accuracy:</strong> Granular inventory control that minimizes
                  errors and lost stock.
                </li>
                <li>
                  <strong>Automated Reorder Alerts:</strong> Notifications when inventory reaches
                  predefined thresholds.
                </li>
              </ul>
            </div>

            {/* SECTION 3 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                3. Agile Distribution & Fulfillment
              </h3>
              <p>
                A high-performing warehouse is defined by how efficiently goods move out. Our
                fulfillment workflows are optimized for speed and accuracy.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Pick-and-Pack Services:</strong> Accurate order picking, customized
                  packaging, and dispatch preparation.
                </li>
                <li>
                  <strong>Kitting & Value-Added Services:</strong> Bundling, labeling, and
                  repackaging tailored to your needs.
                </li>
                <li>
                  <strong>Cross-Docking:</strong> Direct transfer from inbound to outbound transport
                  to reduce storage time and cost.
                </li>
              </ul>
            </div>

            {/* SECTION 4 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                4. Scalable Capacity for Business Growth
              </h3>
              <p>
                Inventory demand fluctuates. Our warehousing model scales with your business —
                without long-term lease commitments.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Flexible Footprint:</strong> Pay only for the space you use, whether a few
                  pallets or full-scale storage.
                </li>
                <li>
                  <strong>Seasonal Peak Management:</strong> Additional capacity during high-demand
                  periods to prevent bottlenecks.
                </li>
              </ul>
            </div>

            {/* SECTION 5 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                5. Rigorous Asset Protection & Quality Control
              </h3>
              <p>
                We handle your goods with the same care and accountability as our own.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Inbound Inspection:</strong> Verification of shipments upon arrival for
                  damage or discrepancies.
                </li>
                <li>
                  <strong>Cycle Counting:</strong> Regular physical audits to ensure system accuracy
                  and inventory integrity.
                </li>
              </ul>
            </div>

            {/* WHY CHOOSE */}
            <div className="mt-16 flex flex-col gap-4 pt-4">
              <h3 className="text-h3 text-neutral">
                Why Choose Richmind Logistics for Warehousing?
              </h3>
              <ul className="list-disc list-inside flex flex-col gap-3">
                <li>
                  <strong>Strategic Location Advantage:</strong> Facilities near major transport hubs
                  for faster delivery and reduced last-mile costs.
                </li>
                <li>
                  <strong>Technology-Driven Efficiency:</strong> Advanced logistics technology that
                  improves accuracy and reduces turnaround time.
                </li>
                <li>
                  <strong>Reduced Overhead:</strong> Eliminate warehouse rent, staffing, equipment,
                  and insurance costs.
                </li>
                <li>
                  <strong>Expert Staffing:</strong> Skilled teams trained in safe handling and
                  quality control.
                </li>
                <li>
                  <strong>Seamless Integration:</strong> Direct integration with Import, Export, and
                  Transit services for true end-to-end logistics.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
