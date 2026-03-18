import React from 'react';
import '../../../styles/journey/fertility/treatment-options.css';

const TREATMENTS = [
    {
        title: "Ovulation Induction",
        icon: <i className="fa-solid fa-pills"></i>,
        desc: "Oral agents [Clomiphene citrate / Clomid, Letrozole] are prescribed to trigger follicular development and ovulation in women whose cycles are irregular or anovulatory.",
        rateLabel: "Success Rate ~20-25%",
        rate: "25%"
    },
    {
        title: "IUI (Insemination)",
        icon: <i className="fa-solid fa-syringe"></i>,
        desc: "In IUI [intrauterine insemination], prepared [washed] sperm are delivered directly into the uterine cavity at or around the time of ovulation — frequently paired with ovulation-stimulating medication to boost success.",
        rateLabel: "Success Rate ~10-20%",
        rate: "20%"
    },
    {
        title: "IVF (In Vitro)",
        icon: <i className="fa-solid fa-flask"></i>,
        desc: "Oocytes [eggs] are retrieved from the ovaries and combined with sperm in a laboratory setting. IVF [in vitro fertilisation] is recognised as the most effective [first-line] assisted reproductive technology for a broad spectrum of infertility diagnoses.",
        rateLabel: "Success Rate ~30-50%",
        rate: "50%"
    },
    {
        title: "Egg Freezing",
        icon: <i className="fa-solid fa-snowflake"></i>,
        desc: "Oocyte cryopreservation [egg freezing] allows women to safeguard their reproductive potential for use at a later stage in life. Vitrified [flash-frozen] eggs can be stored for extended periods [with no defined maximum under current evidence].",
        rateLabel: "Survival Rate >90%",
        rate: "90%"
    },
    {
        title: "ICSI",
        icon: <i className="fa-solid fa-microscope"></i>,
        desc: "Intracytoplasmic Sperm Injection [ICSI] involves a single sperm being injected directly into an egg under high-powered microscopy [IMSI 6600×]. The gold standard for male-factor infertility, poor fertilisation history, or low sperm count.",
        rateLabel: "Fertilisation Rate ~70–85%",
        rate: "85%"
    },
    {
        title: "Frozen Embryo Transfer",
        icon: <i className="fa-solid fa-temperature-arrow-down"></i>,
        desc: "A previously frozen embryo is thawed and transferred into a hormonally prepared uterus. FET cycles avoid ovarian stimulation, offer flexible timing, and often deliver outcomes comparable to — or better than — fresh transfers.",
        rateLabel: "Success Rate ~35–45%",
        rate: "45%"
    },
    {
        title: "Donor Egg IVF",
        icon: <i className="fa-solid fa-hand-holding-heart"></i>,
        desc: "Eggs from a screened, healthy donor are fertilised with partner or donor sperm. Donor IVF is recommended for diminished ovarian reserve, repeated IVF failure, premature ovarian insufficiency, or genetic concerns. Regulated under ICMR & ART Act 2021 in India.",
        rateLabel: "Success Rate ~50–60%",
        rate: "60%"
    },
    {
        title: "PCOS Treatment",
        icon: <i className="fa-solid fa-circle-nodes"></i>,
        desc: "PCOS-related anovulatory infertility is addressed through lifestyle optimisation [5–10% weight loss improves ovulation in 80% of women], Letrozole [preferred per ESHRE 2023], Metformin for insulin resistance, and if needed, low-dose gonadotropin stimulation.",
        rateLabel: "Ovulation restored in ~70–80%",
        rate: "80%"
    },
    {
        title: "Gestational Surrogacy",
        icon: <i className="fa-solid fa-people-arrows"></i>,
        desc: "An IVF embryo created from the intended parents' [or donor] genetic material is transferred into a gestational carrier who carries the pregnancy. Permitted for medical indications under India's ART Act 2021 and Surrogacy Regulation Act 2021.",
        rateLabel: "Success Rate ~55–65%",
        rate: "65%"
    }
];

export const TreatmentOptions: React.FC = () => {
    return (
        <section className="treatment-section fade-in-up" id="treatments" aria-label="IVF, IUI and Fertility Treatment Options">
            <div className="center-text">
                <h2 className="section-title-lg">
                    <span className="title-black">Treatment</span><br/>Options Lab
                </h2>
                <p className="sub-head">Explore assisted reproductive technologies. Hover to estimate success rates.</p>
            </div>

            <div className="treatment-grid">
                {TREATMENTS.map((tx, idx) => (
                    <div 
                        key={idx} 
                        className="glass-card" 
                        style={{ '--success-rate': tx.rate } as React.CSSProperties}
                    >
                        <div className="glass-icon-wrapper">{tx.icon}</div>
                        <h3>{tx.title}</h3>
                        <p className="treatment-desc">{tx.desc}</p>
                        <div className="success-rate-label">{tx.rateLabel}</div>
                        <div className="success-meter">
                            <div className="success-fill"></div>
                        </div>
                    </div>
                ))}

                <div className="si-cta-center">
                    <button className="btn-primary-3d">
                        <span>🧪</span> Try Treatment Simulator
                        <span className="seo-text-xs">↗</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TreatmentOptions;
