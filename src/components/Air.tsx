"use client";

export default function AirSeaFreightServicePage() {
  return (
    <section className="w-full bg-surface py-16 lg:py-24">
      {/* OUTER CONTAINER – matches site-wide responsiveness */}
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">
        
        {/* INNER CONTENT */}
        <div className="mx-auto flex flex-col gap-10">
          
          {/* Title */}
          <div className="flex flex-col items-start text-left gap-6">
            <h1 className="text-h1 text-neutral">
              Global Air & Sea Freight Solutions
            </h1>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-6 text-left w-full text-neutral">
            <p>
              In today’s interconnected economy, the ability to move goods across
              borders with speed and cost-efficiency is essential. At
              <strong> Richmind Logistics</strong>, we deliver a multi-modal freight
              strategy that bridges continents. Whether you are shipping
              time-sensitive electronics by air or high-volume industrial
              equipment by sea, we provide the infrastructure and expertise to
              move your cargo globally without friction.
            </p>

            {/* SECTION 1 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                1. High-Priority Air Freight Services
              </h3>
              <p>
                When speed is the priority, our air freight solutions deliver the
                fastest transit times available through partnerships with Tier-1
                global carriers.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Expedited & Next-Flight-Out:</strong> Immediate access
                  to the earliest departures for urgent shipments.
                </li>
                <li>
                  <strong>Specialized Cargo Handling:</strong> Secure transport
                  for high-value, fragile, and temperature-sensitive goods.
                </li>
                <li>
                  <strong>Global Hub Access:</strong> Coverage across major
                  international airports for seamless destination handover.
                </li>
              </ul>
            </div>

            {/* SECTION 2 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                2. Strategic Sea Freight & Ocean Logistics
              </h3>
              <p>
                For large-scale shipments and bulk cargo, sea freight offers
                unmatched cost efficiency and scalability.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Full Container Load (FCL):</strong> Dedicated 20ft,
                  40ft, or High Cube containers for maximum security.
                </li>
                <li>
                  <strong>Less than Container Load (LCL):</strong> Shared
                  container solutions that reduce costs for smaller volumes.
                </li>
                <li>
                  <strong>Intermodal Integration:</strong> Smooth coordination
                  from ship to rail or truck for door-to-door delivery.
                </li>
              </ul>
            </div>

            {/* SECTION 3 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                3. Integrated Global Compliance & Documentation
              </h3>
              <p>
                International freight is governed by complex maritime and
                aviation regulations. We handle the compliance burden end-to-end.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Bill of Lading & Air Waybill Management:</strong>
                  Accurate preparation of all primary transport documents.
                </li>
                <li>
                  <strong>Incoterms® Advisory:</strong> Expert guidance on FOB,
                  CIF, EXW, and other terms to clarify cost and risk ownership.
                </li>
                <li>
                  <strong>Port & Terminal Coordination:</strong> Active
                  management to prevent dwell time and unnecessary charges.
                </li>
              </ul>
            </div>

            {/* SECTION 4 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                4. End-to-End Visibility & Tracking
              </h3>
              <p>
                Distance should never reduce transparency. We provide real-time
                insight into your shipment’s global journey.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Vessel & Flight Tracking:</strong> Live monitoring
                  across international routes.
                </li>
                <li>
                  <strong>Milestone Alerts:</strong> Automated updates from
                  departure to customs clearance.
                </li>
              </ul>
            </div>

            {/* SECTION 5 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                5. Freight Consolidation & Optimization
              </h3>
              <p>
                We don’t just move cargo — we optimize it to reduce cost and
                improve efficiency.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Consolidation Services:</strong> Grouping shipments to
                  unlock bulk shipping rates.
                </li>
                <li>
                  <strong>Route Analysis:</strong> Selecting optimal carriers
                  and lanes to balance speed and spend.
                </li>
              </ul>
            </div>

            {/* WHY CHOOSE */}
            <div className="mt-16 flex flex-col gap-4 pt-4">
              <h3 className="text-h3 text-neutral">
                Why Choose Richmind Logistics for Air & Sea Freight?
              </h3>
              <ul className="list-disc list-inside flex flex-col gap-3">
                <li>
                  <strong>Tier-1 Carrier Relationships:</strong> Priority access
                  to space and competitive rates, even during peak seasons.
                </li>
                <li>
                  <strong>Customized Multi-Modal Strategies:</strong> Hybrid
                  Sea-Air solutions that balance speed and cost.
                </li>
                <li>
                  <strong>Proactive Problem Solving:</strong> Continuous global
                  monitoring with instant contingency planning.
                </li>
                <li>
                  <strong>Zero-Gaps Security:</strong> Professional lashing,
                  palletizing, and cargo protection throughout transit.
                </li>
                <li>
                  <strong>Local Expertise, Global Reach:</strong> On-ground
                  specialists at destination ports worldwide.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
