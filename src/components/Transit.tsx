"use client";

export default function TransitServicePage() {
  return (
    <section className="w-full bg-surface py-16 lg:py-24">
      {/* OUTER CONTAINER – matches site-wide responsiveness */}
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">
        
        {/* INNER CONTENT */}
        <div className="mx-auto flex flex-col gap-10">
          
          {/* Title */}
          <div className="flex flex-col items-start text-left gap-6">
            <h1 className="text-h1 text-neutral">Transit Services</h1>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-6 text-left w-full text-neutral">
            <p>
              In the fast-paced world of global trade, transit is the critical link 
              that keeps the supply chain moving. At <strong>Richmind Logistics</strong>, 
              our Transit Services are engineered to bridge the gap between origin and 
              destination with maximum efficiency. We specialize in the seamless movement 
              of cargo across regions and borders, ensuring your goods are never stagnant 
              and always secure.
            </p>

            {/* SECTION 1 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                1. Data-Driven Route Optimization
              </h3>
              <p>
                Efficient transit is about more than just distance — it’s about selecting 
                the smartest and most reliable path.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Traffic & Infrastructure Analysis:</strong> Monitoring road 
                  conditions, port congestion, and border wait times to avoid delays.
                </li>
                <li>
                  <strong>Fuel & Time Efficiency:</strong> Optimized routing that reduces 
                  unnecessary mileage, lowers cost, and minimizes environmental impact.
                </li>
              </ul>
            </div>

            {/* SECTION 2 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                2. Specialized Cross-Border & Regional Coordination
              </h3>
              <p>
                Moving cargo across regions requires deep regulatory knowledge and 
                operational precision. We manage every friction point.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Bonded Transit Solutions:</strong> Facilitating movement under 
                  customs bond to avoid immediate duty and tax payments.
                </li>
                <li>
                  <strong>Regulatory Alignment:</strong> Ensuring compliance with regional 
                  transport laws, safety permits, and manifest requirements.
                </li>
              </ul>
            </div>

            {/* SECTION 3 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                3. Rigorous Cargo Integrity & Chain of Custody
              </h3>
              <p>
                Every movement introduces risk — we eliminate uncertainty through strict 
                handling and accountability.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Secure Transloading:</strong> Supervised cargo transfers between 
                  transport modes to prevent mishandling.
                </li>
                <li>
                  <strong>Equipment Standards:</strong> High-spec vehicles equipped with 
                  advanced securing systems for fragile, high-value, or oversized cargo.
                </li>
              </ul>
            </div>

            {/* SECTION 4 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                4. Real-Time Telematics & Predictive Tracking
              </h3>
              <p>
                Visibility is essential for confidence and control throughout the transit 
                journey.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>GPS-Enabled Monitoring:</strong> 24/7 tracking with high-frequency 
                  location updates.
                </li>
                <li>
                  <strong>Proactive Delay Alerts:</strong> Instant notifications with revised 
                  ETAs if disruptions occur.
                </li>
              </ul>
            </div>

            {/* SECTION 5 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h3 text-neutral">
                5. Flexible & Scalable Scheduling
              </h3>
              <p>
                Your operations don’t stop — and neither do we. Our transit solutions adapt 
                to your business rhythms.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <strong>Just-In-Time (JIT) Delivery:</strong> Aligning transit schedules 
                  with inventory demand to reduce storage costs.
                </li>
                <li>
                  <strong>Urgent & Expedited Options:</strong> Dedicated and time-critical 
                  transport solutions for high-priority shipments.
                </li>
              </ul>
            </div>

            {/* WHY CHOOSE */}
            <div className="mt-16 flex flex-col gap-4 pt-4">
              <h3 className="text-h3 text-neutral">
                Why Choose Richmind Logistics for Transit?
              </h3>

              <ul className="list-disc list-inside flex flex-col gap-3">
                <li>
                  <strong>Strategic Network Reach:</strong> Strong relationships with 
                  regional carriers and transport hubs.
                </li>
                <li>
                  <strong>Safety-First Culture:</strong> Strict protocols and documented 
                  chain of custody for every shipment.
                </li>
                <li>
                  <strong>Reliability Under Pressure:</strong> Proven contingency planning 
                  for disruptions and unexpected events.
                </li>
                <li>
                  <strong>Transparent Partnership:</strong> Real-time data, honest 
                  communication, and accountable support.
                </li>
                <li>
                  <strong>Cost-Effective Speed:</strong> Balancing rapid delivery with 
                  disciplined cost control.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
