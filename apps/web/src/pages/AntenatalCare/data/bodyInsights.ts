export interface BodyInsight {
    title: string;
    body: string;
    icon: string;
    related?: string[];
}

export const BODY_INSIGHTS: Record<string, BodyInsight> = {
    heart: {
        title: "Cardiovascular Changes",
        icon: "❤️",
        body: `
      <h4>Your Heart During Pregnancy</h4>
      <ul>
        <li><strong>Cardiac output increases 30-50%:</strong> Your heart pumps more blood per minute to support your baby.</li>
        <li><strong>Heart rate increases:</strong> Typically rises by 10-15 beats per minute.</li>
        <li><strong>Heart size:</strong> The heart actually grows slightly larger and shifts position as the uterus grows.</li>
      </ul>
      <h4>Normal Symptoms</h4>
      <p>Mild palpitations or feeling out of breath during exertion can be normal as your heart works harder.</p>
    `,
        related: ['blood', 'bp']
    },
    blood: {
        title: "Blood Volume & Circulation",
        icon: "🩸",
        body: `
      <h4>Dramatic Volume Increase</h4>
      <p>Your blood supply expands 40-50% to supply oxygen and nutrients to the baby via the placenta.</p>
      <ul>
        <li><strong>Peaks at week 32-34:</strong> You have about 1.5 to 2 extra liters of blood.</li>
        <li><strong>Anemia risk:</strong> Plasma increases more than red blood cells, which can "dilute" your blood (physiological anemia).</li>
      </ul>
    `,
        related: ['heart', 'iron']
    },
    bp: {
        title: "Blood Pressure Monitoring",
        icon: "💓",
        body: `
      <h4>Why We Check Every Visit</h4>
      <p>Monitoring BP helps detect pre-eclampsia early. Normal targets are typically <140/90.</p>
      <ul>
        <li><strong>Gestational Hypertension:</strong> High BP developing after 20 weeks.</li>
        <li><strong>Pre-eclampsia:</strong> High BP plus protein in urine — requires urgent care.</li>
      </ul>
    `,
        related: ['heart', 'kidney']
    },
    uterus: {
        title: "Uterus & Baby's Home",
        icon: "🤰",
        body: `
      <h4>Amazing Growth</h4>
      <ul>
        <li><strong>Pre-pregnancy:</strong> Pear-sized (~60g).</li>
        <li><strong>At term:</strong> Watermelon-sized (~1000g).</li>
        <li><strong>Fundal Height:</strong> Measured from the pubic bone to the top of the uterus to track growth.</li>
      </ul>
    `,
        related: ['baby', 'placenta', 'cervix']
    },
    baby: {
        title: "Baby's Growth & Movement",
        icon: "👶",
        body: `
      <h4>Development Milestones</h4>
      <ul>
        <li><strong>Week 18-22:</strong> Anatomy scan tracks organ development.</li>
        <li><strong>Week 28+:</strong> Kick counting becomes important to monitor wellbeing.</li>
      </ul>
      <p>Report any sudden changes or decrease in movement patterns immediately.</p>
    `,
        related: ['uterus', 'fluid']
    },
    placenta: {
        title: "The Placenta",
        icon: "🫀",
        body: `
      <h4>Life Support System</h4>
      <p>The placenta provides oxygen and nutrients while removing waste. If it's "low-lying" (previa), it may require special monitoring.</p>
    `,
        related: ['uterus', 'blood']
    },
    fluid: {
        title: "Amniotic Fluid",
        icon: "💧",
        body: `
      <h4>Protective Environment</h4>
      <p>Fluid cushions the baby, regulates temperature, and allows for lung development. "Oligohydramnios" means too little fluid; "Polyhydramnios" means too much.</p>
    `,
        related: ['baby', 'kidney']
    },
    cervix: {
        title: "Cervix & Labor Prep",
        icon: "🎯",
        body: `
      <h4>The Doorway to Birth</h4>
      <p>The cervix stays long and closed during pregnancy. Near labor, it "ripens" (softens), "effaces" (thins), and "dilates" (opens).</p>
    `,
        related: ['uterus']
    },
    breasts: {
        title: "Breast Changes",
        icon: "🤱",
        body: `
      <h4>Preparing for Feedings</h4>
      <p>Size increases, darkening areolas, and early milk (colostrum) production starting mid-pregnancy are common.</p>
    `,
        related: ['hormones']
    },
    hormones: {
        title: "Pregnancy Hormones",
        icon: "⚗️",
        body: `
      <h4>The Chemical Drivers</h4>
      <ul>
        <li><strong>hCG:</strong> Maintaining early pregnancy.</li>
        <li><strong>Progesterone:</strong> Relaxing muscles (causes heartburn/constipation).</li>
        <li><strong>Relaxin:</strong> Loosening joints for birth.</li>
      </ul>
    `,
        related: ['breasts']
    },
    weight: {
        title: "Weight Gain & Distribution",
        icon: "⚖️",
        body: `
      <h4>Where the Pounds Go</h4>
      <p>Weight reflects blood volume, fluid, placenta, uterus growth, and baby — not just fat stores.</p>
    `,
        related: ['nutrition']
    },
    kidney: {
        title: "Kidneys & Urinary System",
        icon: "🫘",
        body: `
      <h4>Filtering for Two</h4>
      <p>Blood flow to kidneys increases significantly. We check urine for protein to screen for pre-eclampsia and bacteria for UTIs.</p>
    `,
        related: ['bp', 'fluid']
    },
    bladder: {
        title: "Bladder Pressure",
        icon: "💧",
        body: `
      <h4>Why Frequency Increases</h4>
      <p>Hormones and the growing uterus reduce bladder capacity. Frequency is common, but pain/burning is NOT — report it.</p>
    `,
        related: ['kidney']
    },
    spine: {
        title: "Back & Spine",
        icon: "🦴",
        body: `
      <h4>Postural Changes</h4>
      <p>As your center of gravity shifts, lordosis (arch in back) increases. Hormones loosen ligaments, which can cause back pain.</p>
    `,
        related: ['weight']
    }
};
