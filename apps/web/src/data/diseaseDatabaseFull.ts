/**
 * Full disease database extracted from symptom_checker.html.
 * Used by Symptom Checker search and detector.
 */
import type { DiseaseDatabase } from '../scripts/symptom_checker';

const diseaseDatabase: DiseaseDatabase = {
  reproductive: {
    id: 'reproductive',
    title: 'Reproductive System Disorders',
    icon: 'fas fa-venus',
    color: '#ec407a',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
    description: 'Conditions affecting the female reproductive organs including ovaries, uterus, and associated structures',
    preview: 'From PCOS to endometriosis, explore hormonal and structural conditions affecting fertility and menstrual health',
    exampleDiseases: ['PCOS', 'Endometriosis', 'Fibroids', 'Ovarian Cysts'],
    diseases: [
      {
        name: 'Polycystic Ovary Syndrome (PCOS)',
        category: 'Reproductive',
        tags: ['Hormonal', 'Metabolic', 'Fertility'],
        severityLevels: {
          mild: {
            symptoms: 'Irregular menstrual cycles (35+ days), mild hirsutism, slight weight gain, occasional acne. Normal glucose tolerance.',
            action: 'Lifestyle modifications, regular monitoring'
          },
          moderate: {
            symptoms: 'Oligomenorrhea or amenorrhea >3 months, moderate hirsutism requiring treatment, acne resistant to topical therapy, insulin resistance without diabetes, difficulty conceiving.',
            action: 'Medical management with hormonal therapy, metformin'
          },
          severe: {
            symptoms: 'Complete amenorrhea, significant metabolic syndrome, type 2 diabetes mellitus, severe hirsutism and virilization, obesity (BMI >35), depression and anxiety disorders.',
            action: 'Aggressive metabolic management, specialist referral'
          },
          critical: null
        },
        comorbidities: 'Concurrent diabetes accelerates cardiovascular disease risk; depression amplifies treatment non-adherence; obesity compounds insulin resistance requiring aggressive metabolic management.'
      },
      {
        name: 'Endometriosis',
        category: 'Reproductive',
        tags: ['Chronic Pain', 'Fertility'],
        severityLevels: {
          mild: {
            symptoms: 'Mild dysmenorrhea controlled with NSAIDs, slight pelvic discomfort during menstruation, minimal impact on daily activities.',
            action: 'NSAIDs, hormonal contraceptives'
          },
          moderate: {
            symptoms: 'Severe dysmenorrhea requiring prescription analgesics, chronic pelvic pain, dyspareunia, subfertility, fatigue affecting work productivity.',
            action: 'Hormonal therapy, pain management, fertility evaluation'
          },
          severe: {
            symptoms: 'Debilitating chronic pain unresponsive to medical management, deep infiltrating endometriosis affecting bowel/bladder, infertility requiring assisted reproduction, significant quality of life impairment.',
            action: 'Surgical intervention, multidisciplinary care, fertility treatment'
          },
          critical: null
        },
        comorbidities: 'Concurrent adenomyosis intensifies symptoms; inflammatory bowel disease complicates bowel endometriosis diagnosis; chronic pain syndrome requires multidisciplinary pain management.'
      },
      {
        name: 'Uterine Fibroids (Leiomyomas)',
        category: 'Reproductive',
        tags: ['Benign Tumors', 'Bleeding'],
        severityLevels: {
          mild: {
            symptoms: 'Asymptomatic small fibroids (<3cm) found incidentally, minimal menstrual changes, no anemia.',
            action: 'Observation, routine monitoring'
          },
          moderate: {
            symptoms: 'Menorrhagia requiring pad changes every 1-2 hours, mild anemia (Hgb 10-12 g/dL), pelvic pressure, urinary frequency, enlarged uterus palpable on examination.',
            action: 'Hormonal therapy, iron supplementation, consider intervention'
          },
          severe: {
            symptoms: 'Severe menorrhagia with flooding, moderate-severe anemia (Hgb <10 g/dL) requiring transfusion, significant bulk symptoms with bowel/bladder compression, hydronephrosis, acute pain from degenerating fibroid.',
            action: 'Surgical intervention (myomectomy, hysterectomy), UAE'
          },
          critical: null
        },
        comorbidities: 'Sickle cell disease increases risk of painful fibroid degeneration; hypertension complicates surgical management; obesity makes diagnosis and treatment more challenging.'
      },
      {
        name: 'Ovarian Cysts',
        category: 'Reproductive',
        tags: ['Benign', 'Acute Pain Risk'],
        severityLevels: {
          mild: {
            symptoms: 'Functional cysts <5cm, asymptomatic or mild pelvic discomfort, resolve spontaneously within 2-3 cycles.',
            action: 'Observation, repeat ultrasound'
          },
          moderate: {
            symptoms: 'Persistent cysts 5-10cm, moderate pelvic pain, menstrual irregularities, requires monitoring and possible hormonal suppression.',
            action: 'Hormonal contraceptives, continued monitoring'
          },
          severe: {
            symptoms: 'Ovarian torsion presenting with acute severe pelvic pain, nausea, vomiting, fever; hemorrhagic cyst with hemoperitoneum; cyst rupture requiring emergency surgery; complex cysts concerning for malignancy.',
            action: 'Emergency surgical intervention, cancer evaluation if complex'
          },
          critical: null
        },
        comorbidities: 'PCOS increases recurrence risk; endometriosis forms endometriomas; anticoagulation therapy complicates hemorrhagic cyst management.'
      },
      {
        name: 'Adenomyosis',
        category: 'Reproductive',
        tags: ['Chronic Pain', 'Heavy Bleeding'],
        severityLevels: {
          mild: {
            symptoms: 'Slightly heavier menstrual flow, mild dysmenorrhea, minimal uterine enlargement.',
            action: 'NSAIDs, hormonal contraceptives'
          },
          moderate: {
            symptoms: 'Menorrhagia with clots, severe dysmenorrhea, chronic pelvic pain, dyspareunia, uterus 2-3 times normal size.',
            action: 'Hormonal IUD, GnRH agonists, pain management'
          },
          severe: {
            symptoms: 'Debilitating pain uncontrolled by medication, severe anemia from menorrhagia, significantly enlarged boggy uterus, major impact on quality of life requiring hysterectomy consideration.',
            action: 'Hysterectomy, uterine artery embolization'
          },
          critical: null
        },
        comorbidities: 'Concurrent endometriosis amplifies pelvic pain; fibroids complicate diagnosis; chronic pain syndromes require comprehensive pain management.'
      },
      {
        name: 'Pelvic Inflammatory Disease (PID)',
        category: 'Reproductive',
        tags: ['Infection', 'Emergency'],
        severityLevels: {
          mild: {
            symptoms: 'Lower abdominal tenderness, abnormal vaginal discharge, mild fever (<38°C), cervical motion tenderness on examination.',
            action: 'Outpatient antibiotics, STI testing and treatment'
          },
          moderate: {
            symptoms: 'Moderate-severe pelvic pain, fever 38-39°C, purulent cervical discharge, adnexal tenderness, elevated inflammatory markers (ESR, CRP).',
            action: 'Broad-spectrum IV antibiotics, hospitalization consideration'
          },
          severe: {
            symptoms: 'Tubo-ovarian abscess, severe sepsis, fever >39°C, peritonitis, Fitz-Hugh-Curtis syndrome (perihepatitis), requires hospitalization and IV antibiotics, risk of infertility and chronic pelvic pain.',
            action: 'Hospitalization, IV antibiotics, surgical drainage if needed'
          },
          critical: null
        },
        comorbidities: 'HIV/AIDS increases severity and treatment resistance; diabetes impairs immune response; immunosuppression from autoimmune disease treatment complicates management.'
      },
      {
        name: 'Pelvic Organ Prolapse',
        category: 'Reproductive',
        tags: ['Structural', 'Incontinence'],
        severityLevels: {
          mild: {
            symptoms: 'Stage I-II prolapse, pelvic heaviness worsening with prolonged standing, no urinary symptoms, managed with pelvic floor exercises.',
            action: 'Pelvic floor therapy, lifestyle modifications'
          },
          moderate: {
            symptoms: 'Stage III prolapse to vaginal introitus, visible bulge, urinary retention or stress incontinence, requires pessary or surgical consideration.',
            action: 'Pessary fitting, surgical consultation'
          },
          severe: {
            symptoms: 'Complete uterine/vaginal vault procidentia, urinary retention requiring catheterization, chronic ulceration of prolapsed tissue, complete bowel obstruction, significant functional impairment.',
            action: 'Surgical reconstruction, colpocleisis if not sexually active'
          },
          critical: null
        },
        comorbidities: 'Obesity increases intra-abdominal pressure worsening prolapse; COPD and chronic cough accelerate progression; connective tissue disorders increase risk; diabetes complicates surgical healing.'
      }
    ]
  },

malignancies: {
    id: 'malignancies',
    title: 'Gynecologic Cancers',
    icon: 'fas fa-ribbon',
    color: '#f06292',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    description: 'Malignant conditions affecting women\'s reproductive organs and breast tissue',
    preview: 'Early detection saves lives. Learn about breast, ovarian, cervical, and uterine cancers with staging and treatment options',
    exampleDiseases: ['Breast Cancer', 'Ovarian Cancer', 'Cervical Cancer', 'Endometrial Cancer'],
    diseases: [
      {
        name: 'Breast Cancer',
        category: 'Malignancies',
        tags: ['Cancer', 'Early Detection Important'],
        severityLevels: {
          mild: {
            symptoms: 'Palpable breast lump, nipple discharge, skin changes (dimpling, peau d\'orange), nipple retraction, localized pain. Stage I-II disease confined to breast/local lymph nodes.',
            action: 'Surgical resection, chemotherapy, radiation, hormonal therapy based on staging'
          },
          moderate: {
            symptoms: 'Stage III locally advanced with chest wall invasion, satellite skin nodules, significant lymphadenopathy, inflammatory breast cancer presenting as diffuse erythema and edema.',
            action: 'Neoadjuvant chemotherapy, surgery, radiation, targeted therapy'
          },
          severe: {
            symptoms: 'Stage IV with distant metastases causing bone pain, pathological fractures, dyspnea from pleural/lung involvement, neurological deficits from brain metastases, hepatic dysfunction from liver metastases.',
            action: 'Palliative chemotherapy, targeted therapy, immunotherapy, pain management'
          },
          critical: null
        },
        comorbidities: 'Diabetes complicates chemotherapy tolerance; cardiovascular disease limits certain targeted therapies; obesity affects prognosis and treatment toxicity; osteoporosis impacts aromatase inhibitor therapy.'
      },
      {
        name: 'Ovarian Cancer',
        category: 'Malignancies',
        tags: ['Cancer', 'Often Late Detection'],
        severityLevels: {
          mild: {
            symptoms: 'Often asymptomatic; vague abdominal discomfort, bloating, early satiety, urinary frequency. Stage I disease confined to ovaries.',
            action: 'Surgical staging, chemotherapy if indicated'
          },
          moderate: {
            symptoms: 'Stage III-IV with abdominal distension from ascites, bowel obstruction symptoms, pelvic/abdominal mass, weight loss, fatigue, pleural effusion causing dyspnea.',
            action: 'Cytoreductive surgery, platinum-based chemotherapy'
          },
          severe: {
            symptoms: 'Malignant bowel obstruction, severe ascites requiring frequent paracentesis, cachexia, multi-organ failure, carcinomatosis causing severe pain and functional decline.',
            action: 'Palliative care, symptom management, chemotherapy if performance status allows'
          },
          critical: null
        },
        comorbidities: 'BRCA mutations increase aggressiveness; Lynch syndrome affects screening strategies; cardiovascular disease complicates surgical debulking; malnutrition impairs chemotherapy tolerance.'
      },
      {
        name: 'Cervical Cancer',
        category: 'Malignancies',
        tags: ['Cancer', 'HPV-Related', 'Preventable'],
        severityLevels: {
          mild: {
            symptoms: 'Asymptomatic detected by screening, abnormal Pap smear, post-coital or intermenstrual bleeding, watery vaginal discharge. Stage IA microinvasive disease.',
            action: 'Conization, simple hysterectomy for early stage'
          },
          moderate: {
            symptoms: 'Stage IB-IIB with abnormal bleeding, pelvic pain, dyspareunia, malodorous discharge, visible cervical lesion.',
            action: 'Radical hysterectomy with lymphadenectomy, or chemoradiation'
          },
          severe: {
            symptoms: 'Stage III-IV with hydronephrosis, pelvic sidewall extension, bowel/bladder invasion causing hematuria or rectal bleeding, fistula formation, lower extremity edema from lymphatic obstruction, severe pelvic pain.',
            action: 'Chemoradiation, palliative care for advanced disease'
          },
          critical: null
        },
        comorbidities: 'HIV/AIDS accelerates progression and reduces treatment response; diabetes impairs wound healing post-surgery; smoking reduces radiation therapy efficacy; immunosuppression increases recurrence risk.'
      },
      {
        name: 'Endometrial/Uterine Cancer',
        category: 'Malignancies',
        tags: ['Cancer', 'Post-Menopausal Bleeding'],
        severityLevels: {
          mild: {
            symptoms: 'Postmenopausal bleeding, abnormal uterine bleeding in premenopausal women, abnormal Pap smear, diagnosis via endometrial biopsy, disease confined to uterus, excellent prognosis with surgery.',
            action: 'Total hysterectomy with bilateral salpingo-oophorectomy'
          },
          moderate: {
            symptoms: 'Extension to cervix or beyond uterus, pelvic/para-aortic lymph node involvement, pelvic pain, pelvic mass, requires adjuvant radiation and/or chemotherapy.',
            action: 'Surgery plus adjuvant radiation or chemotherapy based on staging'
          },
          severe: {
            symptoms: 'Bladder/bowel invasion, distant metastases to lungs, liver, bone, abdominal carcinomatosis, malignant ascites, bowel obstruction, poor prognosis requiring systemic chemotherapy.',
            action: 'Palliative chemotherapy, hormonal therapy, symptom management'
          },
          critical: null
        },
        comorbidities: 'Obesity major risk factor (increases risk 2-4 fold); diabetes and PCOS increase risk through unopposed estrogen; Lynch syndrome increases lifetime risk to 40-60%; hypertension common comorbidity; tamoxifen use increases endometrial cancer risk.'
      },
      {
        name: 'Vulvar Cancer',
        category: 'Malignancies',
        tags: ['Cancer', 'Rare'],
        severityLevels: {
          mild: {
            symptoms: 'Vulvar lump or ulcer, pruritus, pain, bleeding, discharge; often preceded by vulvar intraepithelial neoplasia (VIN); early stage confined to vulva.',
            action: 'Wide local excision or partial vulvectomy with sentinel lymph node biopsy'
          },
          moderate: {
            symptoms: 'Locally advanced disease with deeper invasion, inguinal lymph node involvement, larger lesions >2cm, possible urethral or vaginal involvement.',
            action: 'Radical vulvectomy with inguinofemoral lymphadenectomy, adjuvant radiation if indicated'
          },
          severe: {
            symptoms: 'Advanced disease with extensive local spread, bladder/rectal invasion, fixed inguinal nodes, distant metastases, severe pain, fistula formation.',
            action: 'Chemoradiation, palliative surgery, pain management'
          },
          critical: null
        },
        comorbidities: 'HPV infection major risk factor; lichen sclerosus increases risk especially in younger patients; smoking increases risk; immunosuppression accelerates progression.'
      }
    ]
  },

pregnancy: {
    id: 'pregnancy',
    title: 'Pregnancy-Related Conditions',
    icon: 'fas fa-baby',
    color: '#ab47bc',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80',
    description: 'Conditions specific to pregnancy that require special monitoring and care',
    preview: 'High-risk pregnancy conditions including preeclampsia, gestational diabetes, and postpartum complications requiring specialized care',
    exampleDiseases: ['Preeclampsia', 'Gestational Diabetes', 'Hyperemesis', 'PPH'],
    diseases: [
      {
        name: 'Preeclampsia',
        category: 'Pregnancy',
        tags: ['Hypertension', 'Emergency', 'Life-Threatening'],
        severityLevels: {
          mild: {
            symptoms: 'Blood pressure 140/90-159/109 mmHg after 20 weeks gestation, proteinuria ≥300mg/24hr or protein/creatinine ratio ≥0.3, no end-organ dysfunction.',
            action: 'Close monitoring, delivery planning, antihypertensives'
          },
          moderate: {
            symptoms: 'BP ≥160/110 mmHg, severe persistent headache, visual disturbances, epigastric/RUQ pain, thrombocytopenia (<100,000), elevated liver enzymes (>2x normal), pulmonary edema, renal insufficiency.',
            action: 'Hospitalization, magnesium sulfate, delivery consideration'
          },
          severe: {
            symptoms: 'Generalized tonic-clonic seizures, HELLP syndrome (hemolysis, elevated liver enzymes, low platelets), acute renal failure, disseminated intravascular coagulation, placental abruption, pulmonary edema, cerebrovascular accident.',
            action: 'Emergency delivery, ICU care, magnesium sulfate'
          },
          critical: null
        },
        comorbidities: 'Chronic hypertension increases risk 3-5 fold; diabetes mellitus compounds vascular damage; obesity amplifies inflammatory state; chronic kidney disease accelerates progression to severe disease; autoimmune disease (SLE, APS) markedly increases risk.'
      },
      {
        name: 'Gestational Diabetes',
        category: 'Pregnancy',
        tags: ['Metabolic', 'Blood Sugar', 'Pregnancy'],
        severityLevels: {
          mild: {
            symptoms: 'Fasting glucose <95 mg/dL controlled with diet alone, normal fetal growth, diagnosed on routine screening 24-28 weeks.',
            action: 'Diet modification, glucose monitoring, fetal surveillance'
          },
          moderate: {
            symptoms: 'Hyperglycemia requiring insulin, fasting 95-125 mg/dL, macrosomia, polyhydramnios, inadequate glycemic control with diet alone.',
            action: 'Insulin therapy, frequent monitoring, increased fetal surveillance'
          },
          severe: {
            symptoms: 'Poor glycemic control despite insulin, severe macrosomia (>4500g), ketoacidosis, fetal distress, pre-existing complications.',
            action: 'Intensive insulin, possible early delivery, neonatal ICU planning'
          },
          critical: null
        },
        comorbidities: 'Pre-existing diabetes increases complications; obesity requires higher insulin doses; PCOS increases risk; family history of diabetes predicts postpartum progression to type 2 diabetes.'
      },
      {
        name: 'Hyperemesis Gravidarum',
        category: 'Pregnancy',
        tags: ['Nausea', 'Vomiting', 'Dehydration'],
        severityLevels: {
          mild: {
            symptoms: 'Frequent vomiting >3 episodes/day, mild dehydration, <5% weight loss, able to maintain some oral intake.',
            action: 'Outpatient management, antiemetics, small frequent meals'
          },
          moderate: {
            symptoms: 'Persistent vomiting unable to tolerate oral intake, 5-10% weight loss, ketosis, electrolyte imbalances, dehydration requiring IV fluids.',
            action: 'Hospitalization, IV fluids, antiemetics, thiamine supplementation'
          },
          severe: {
            symptoms: '>10% weight loss, severe electrolyte disturbances, hypokale mia, Wernicke\'s encephalopathy risk, acute kidney injury, inability to work/function, severe psychological distress.',
            action: 'Prolonged hospitalization, TPN if refractory, psychological support'
          },
          critical: null
        },
        comorbidities: 'Molar pregnancy or multiple gestation increases severity; prior hyperemesis increases recurrence risk; thyroid dysfunction can coexist; psychiatric comorbidities complicate management.'
      },
      {
        name: 'Peripartum Cardiomyopathy',
        category: 'Pregnancy',
        tags: ['Heart Disease', 'Emergency', 'Life-Threatening'],
        severityLevels: {
          mild: {
            symptoms: 'Mild heart failure symptoms (dyspnea on exertion, fatigue, pedal edema) in last month of pregnancy or first 5 months postpartum, LVEF 35-45%.',
            action: 'Heart failure medications, close cardiac monitoring'
          },
          moderate: {
            symptoms: 'Moderate heart failure (NYHA class III), dyspnea at rest, significant functional limitation, LVEF 25-35%, requires diuretics and cardiac medications.',
            action: 'Aggressive heart failure therapy, anticoagulation, early delivery consideration'
          },
          severe: {
            symptoms: 'Severe heart failure (NYHA class IV), cardiogenic shock, arrhythmias, LVEF <25%, pulmonary edema, requires ICU care, possible mechanical support or transplant.',
            action: 'ICU care, mechanical circulatory support, transplant evaluation'
          },
          critical: null
        },
        comorbidities: 'Preeclampsia co-occurs frequently; multiple gestation and African American race increase risk; advanced maternal age; malnutrition or selenium deficiency may contribute.'
      },
      {
        name: 'Postpartum Hemorrhage',
        category: 'Pregnancy',
        tags: ['Emergency', 'Bleeding', 'Life-Threatening'],
        severityLevels: {
          mild: {
            symptoms: 'Blood loss 500-1000 mL after vaginal delivery or 1000-1500 mL after cesarean, hemodynamically stable, uterine atony responsive to uterotonic agents.',
            action: 'Uterotonic medications, uterine massage, close monitoring'
          },
          moderate: {
            symptoms: 'Blood loss >1000 mL with ongoing bleeding, mild hemodynamic instability (tachycardia), uterine atony partially responsive to treatment, lacerations, retained placental tissue.',
            action: 'Aggressive uterotonic therapy, exploration for retained tissue, repair lacerations, transfusion if indicated'
          },
          severe: {
            symptoms: 'Massive hemorrhage >1500 mL, hemodynamic instability, shock, uterine atony refractory to medical management, placenta accreta spectrum, uterine inversion or rupture.',
            action: 'Massive transfusion protocol, surgical intervention (B-Lynch suture, hysterectomy), ICU care'
          },
          critical: null
        },
        comorbidities: 'Placenta previa or accreta dramatically increases risk; multiple gestation; polyhydramnios; prolonged labor; instrumental delivery; coagulation disorders exacerbate bleeding.'
      },
      {
        name: 'Cholestasis of Pregnancy',
        category: 'Pregnancy',
        tags: ['Liver', 'Itching', 'Fetal Risk'],
        severityLevels: {
          mild: {
            symptoms: 'Pruritus primarily affecting palms and soles, mild elevation of bile acids (10-40 μmol/L), mildly elevated liver enzymes, typically third trimester onset.',
            action: 'Ursodeoxycholic acid, monitoring, fetal surveillance'
          },
          moderate: {
            symptoms: 'Severe generalized pruritus disrupting sleep, bile acids 40-100 μmol/L, jaundice, significant elevation of liver enzymes, increased risk of preterm labor.',
            action: 'Ursodeoxycholic acid, close fetal monitoring, delivery at 36-37 weeks'
          },
          severe: {
            symptoms: 'Bile acids >100 μmol/L, severe hepatic dysfunction, coagulopathy, markedly elevated liver enzymes, high risk of stillbirth, severe maternal pruritus.',
            action: 'Delivery at 36 weeks or earlier if worsening, intensive fetal monitoring'
          },
          critical: null
        },
        comorbidities: 'Multiple gestation increases severity; hepatitis C co-infection; prior cholestasis predicts recurrence (60-70%); increased risk of gestational diabetes and preeclampsia.'
      },
      {
        name: 'Acute Fatty Liver of Pregnancy',
        category: 'Pregnancy',
        tags: ['Emergency', 'Liver Failure', 'Life-Threatening'],
        severityLevels: {
          mild: {
            symptoms: 'Nausea, vomiting, malaise, abdominal pain in third trimester, mild elevation of transaminases and bilirubin, early recognition crucial.',
            action: 'Immediate delivery, supportive care, liver function monitoring'
          },
          moderate: {
            symptoms: 'Hypoglycemia, coagulopathy, jaundice, worsening liver function, encephalopathy, renal insufficiency.',
            action: 'Emergency delivery, ICU care, correction of coagulopathy, glucose monitoring'
          },
          severe: {
            symptoms: 'Fulminant hepatic failure, severe coagulopathy, profound hypoglycemia, acute kidney injury, encephalopathy, DIC, multi-organ failure.',
            action: 'Emergency delivery, intensive ICU support, liver transplant consideration'
          },
          critical: null
        },
        comorbidities: 'Often overlaps with HELLP syndrome; male fetus and multiple gestation increase risk; LCHAD deficiency in fetus; obesity may increase severity.'
      },
      {
        name: 'Cervical Insufficiency',
        category: 'Pregnancy',
        tags: ['Preterm Birth Risk', 'Structural'],
        severityLevels: {
          mild: {
            symptoms: 'Short cervix (<25mm) on transvaginal ultrasound in second trimester, no prior history of preterm birth, asymptomatic.',
            action: 'Progesterone supplementation, cervical length monitoring, pelvic rest'
          },
          moderate: {
            symptoms: 'Cervical length <15mm, history of prior second trimester loss, painless cervical dilation, possible cerclage indication.',
            action: 'Cerclage placement (prophylactic or rescue), bed rest, tocolytics if needed'
          },
          severe: {
            symptoms: 'Advanced cervical dilation with membranes visible at external os, imminent preterm delivery, rescue cerclage with high complication risk.',
            action: 'Hospitalization, rescue cerclage attempt, steroids for fetal lung maturity, tocolysis'
          },
          critical: null
        },
        comorbidities: 'Prior cervical surgery (LEEP, cone biopsy) increases risk; uterine anomalies; DES exposure; multiple gestation; connective tissue disorders.'
      }
    ]
  },

endocrine: {
    id: 'endocrine',
    title: 'Endocrine & Metabolic Disorders',
    icon: 'fas fa-syringe',
    color: '#7e57c2',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80',
    description: 'Hormonal and metabolic conditions affecting women\'s health',
    preview: 'Hormonal imbalances from thyroid disorders to diabetes, menopause, PMDD, and bone health conditions',
    exampleDiseases: ['Type 2 Diabetes', 'Thyroid Disorders', 'Menopause', 'Osteoporosis'],
    diseases: [
      {
        name: 'Type 2 Diabetes',
        category: 'Endocrine',
        tags: ['Metabolic', 'Chronic Disease'],
        severityLevels: {
          mild: {
            symptoms: 'Fasting glucose 100-125 mg/dL (prediabetes) or A1C 5.7-6.4%, asymptomatic or mild symptoms (polyuria, polydipsia), manageable with lifestyle modifications.',
            action: 'Lifestyle changes (diet, exercise), metformin if indicated'
          },
          moderate: {
            symptoms: 'Fasting glucose ≥126 mg/dL or A1C ≥6.5%, classic symptoms of hyperglycemia, requires oral hypoglycemic agents, no major end-organ complications yet.',
            action: 'Oral medications (metformin, sulfonylureas, SGLT2 inhibitors), regular monitoring'
          },
          severe: {
            symptoms: 'Poor glycemic control despite multiple medications (A1C >9%), end-organ complications (retinopathy, nephropathy, neuropathy, cardiovascular disease), requires insulin therapy.',
            action: 'Insulin therapy, management of complications, specialist referral'
          },
          critical: {
            symptoms: 'Diabetic ketoacidosis, hyperosmolar hyperglycemic state, severe hypoglycemia, acute complications requiring hospitalization.',
            action: 'Emergency hospitalization, IV insulin, electrolyte correction'
          }
        },
        comorbidities: 'PCOS increases diabetes risk 2-3 fold; obesity central to pathogenesis; hypertension commonly coexists; cardiovascular disease major cause of morbidity/mortality; pregnancy requires specialized care.'
      },
      {
        name: 'Thyroid Disorders',
        category: 'Endocrine',
        tags: ['Hormonal', 'Metabolism'],
        severityLevels: {
          mild: {
            symptoms: 'Subclinical hypothyroidism (elevated TSH, normal T4) or subclinical hyperthyroidism (low TSH, normal T3/T4), minimal symptoms, may not require treatment.',
            action: 'Monitoring, treatment consideration based on symptoms'
          },
          moderate: {
            symptoms: 'Overt hypothyroidism: fatigue, weight gain, cold intolerance, constipation, dry skin, hair loss. Hyperthyroidism: weight loss, heat intolerance, tremor, palpitations, anxiety.',
            action: 'Levothyroxine for hypothyroidism; anti-thyroid medications, beta-blockers for hyperthyroidism'
          },
          severe: {
            symptoms: 'Hypothyroidism: myxedema, severe fatigue, depression, cognitive impairment. Hyperthyroidism: thyroid storm, atrial fibrillation, heart failure, severe weight loss.',
            action: 'Aggressive thyroid hormone replacement or anti-thyroid therapy, specialist management'
          },
          critical: {
            symptoms: 'Myxedema coma (hypothyroidism) or thyroid storm (hyperthyroidism) - both life-threatening emergencies with altered mental status, cardiovascular collapse.',
            action: 'ICU care, emergency thyroid hormone or anti-thyroid therapy'
          }
        },
        comorbidities: 'Autoimmune diseases commonly coexist (vitiligo, celiac, type 1 diabetes); pregnancy requires careful monitoring and dose adjustments; cardiovascular disease worsened by both hypo and hyperthyroidism.'
      },
      {
        name: 'Osteoporosis',
        category: 'Endocrine',
        tags: ['Bone Health', 'Fracture Risk'],
        severityLevels: {
          mild: {
            symptoms: 'Osteopenia: T-score -1.0 to -2.5, asymptomatic, increased fracture risk, no fractures yet.',
            action: 'Calcium, vitamin D, weight-bearing exercise, lifestyle modifications'
          },
          moderate: {
            symptoms: 'Osteoporosis: T-score ≤-2.5, fragility fractures (wrist, vertebral compression), height loss, kyphosis, chronic back pain.',
            action: 'Bisphosphonates or other anti-resorptive therapy, fall prevention'
          },
          severe: {
            symptoms: 'Multiple fragility fractures, severe disability from vertebral fractures, hip fracture with loss of independence, very low bone density (T-score -3.5 or worse).',
            action: 'Anabolic therapy (teriparatide), aggressive treatment, orthopedic intervention'
          },
          critical: null
        },
        comorbidities: 'Steroid use from RA/asthma dramatically increases risk; hyperthyroidism accelerates bone loss; menopause without HRT increases risk; malabsorption syndromes impair calcium absorption.'
      },
      {
        name: 'Premature Ovarian Insufficiency',
        category: 'Endocrine',
        tags: ['Early Menopause', 'Infertility'],
        severityLevels: {
          mild: {
            symptoms: 'Irregular menstrual cycles, elevated FSH (>25 mIU/mL) before age 40, intermittent ovarian function, mild vasomotor symptoms, fertility challenges.',
            action: 'Hormone replacement therapy, fertility counseling'
          },
          moderate: {
            symptoms: 'Amenorrhea, FSH consistently >40, menopausal symptoms (hot flashes, vaginal dryness, mood changes), infertility, low estradiol, significant psychosocial impact.',
            action: 'HRT until natural menopause age, donor eggs for fertility, psychological support'
          },
          severe: {
            symptoms: 'Complete ovarian failure, severe menopausal symptoms, accelerated bone loss, cardiovascular risk, severe psychological distress from infertility.',
            action: 'Comprehensive HRT, bone density monitoring, cardiovascular risk reduction, counseling'
          },
          critical: null
        },
        comorbidities: 'Autoimmune disorders (thyroiditis, Addison\'s) commonly associated; Turner syndrome or Fragile X premutation; chemotherapy/radiation accelerates; osteoporosis risk without HRT; cardiovascular disease risk increased.'
      },
      {
        name: 'Hyperprolactinemia',
        category: 'Endocrine',
        tags: ['Hormonal', 'Fertility'],
        severityLevels: {
          mild: {
            symptoms: 'Mild prolactin elevation (25-100 ng/mL), oligomenorrhea, galactorrhea, may be medication-induced or from microprolactinoma.',
            action: 'Investigate cause, consider dopamine agonist if symptomatic'
          },
          moderate: {
            symptoms: 'Prolactin 100-200 ng/mL, amenorrhea, significant galactorrhea, infertility, microprolactinoma requiring treatment.',
            action: 'Dopamine agonist therapy (cabergoline, bromocriptine), MRI pituitary'
          },
          severe: {
            symptoms: 'Macroprolactinoma with prolactin >200 ng/mL, headaches, visual field defects from mass effect, severe hypogonadism.',
            action: 'Dopamine agonist therapy, surgery if medication-resistant or compressive symptoms'
          },
          critical: null
        },
        comorbidities: 'Antipsychotic medications commonly cause; hypothyroidism causes mild elevation; estrogen deficiency leads to osteoporosis without treatment; pregnancy requires careful monitoring of prolactinomas.'
      },
      {
        name: 'Menopause and Perimenopause',
        category: 'Endocrine',
        tags: ['Natural Transition', 'Hormonal Changes'],
        severityLevels: {
          mild: {
            symptoms: 'Irregular menstrual cycles, occasional hot flashes, mild mood changes, sleep disturbances, early 40s onset of perimenopause.',
            action: 'Lifestyle modifications, symptom management as needed'
          },
          moderate: {
            symptoms: 'Frequent severe hot flashes/night sweats, vaginal dryness affecting intimacy, mood swings, decreased libido, cognitive changes, quality of life impact.',
            action: 'HRT consideration, vaginal estrogen, SSRIs for vasomotor symptoms'
          },
          severe: {
            symptoms: 'Debilitating vasomotor symptoms, severe genitourinary syndrome of menopause with atrophic vaginitis, major depression, severe sleep disruption, significant functional impairment.',
            action: 'Comprehensive HRT if not contraindicated, specialist referral, mental health support'
          },
          critical: null
        },
        comorbidities: 'Breast cancer history contraindicates HRT; cardiovascular disease affects treatment options; osteoporosis accelerates post-menopause; depression amplifies symptoms.'
      },
      {
        name: 'Premenstrual Syndrome (PMS) & PMDD',
        category: 'Endocrine',
        tags: ['Hormonal', 'Mood'],
        severityLevels: {
          mild: {
            symptoms: 'Mild mood changes, bloating, breast tenderness, food cravings in luteal phase, minimal functional impairment.',
            action: 'Lifestyle modifications, exercise, stress management'
          },
          moderate: {
            symptoms: 'Moderate physical and emotional symptoms (mood swings, irritability, anxiety, depression, fatigue) affecting daily function, relieved with menses.',
            action: 'SSRIs, hormonal contraceptives, dietary modifications'
          },
          severe: {
            symptoms: 'PMDD: Severe mood lability, marked anxiety or depression, anger/irritability, decreased interest in activities, significant work/relationship impairment, meets DSM-5 criteria.',
            action: 'Antidepressant therapy (continuous or luteal phase), hormonal suppression, CBT'
          },
          critical: null
        },
        comorbidities: 'Major depression worsens premenstrually; anxiety disorders exacerbated; migraine commonly co-occurs; PCOS may affect symptom pattern.'
      }
    ]
  },

autoimmune: {
    id: 'autoimmune',
    title: 'Autoimmune & Rheumatologic Disorders',
    icon: 'fas fa-shield-virus',
    color: '#5c6bc0',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    description: 'Immune system disorders that disproportionately affect women',
    preview: 'Chronic conditions where the immune system attacks the body, including lupus, rheumatoid arthritis, and Sjögren\'s syndrome',
    exampleDiseases: ['Lupus (SLE)', 'Rheumatoid Arthritis', 'Multiple Sclerosis', 'Fibromyalgia'],
    diseases: [
      {
        name: 'Systemic Lupus Erythematosus (SLE)',
        category: 'Autoimmune',
        tags: ['Autoimmune', 'Multi-System', 'Chronic'],
        severityLevels: {
          mild: {
            symptoms: 'Mild constitutional symptoms (fatigue, fever, weight loss), arthralgia without arthritis, malar rash, photosensitivity, mouth ulcers, no major organ involvement.',
            action: 'Hydroxychloroquine, NSAIDs, sun protection, monitoring'
          },
          moderate: {
            symptoms: 'Arthritis affecting multiple joints, serositis (pleuritis, pericarditis), proteinuria, mild cytopenias, discoid rash, requires systemic therapy.',
            action: 'Corticosteroids, immunosuppressants (azathioprine, methotrexate), close monitoring'
          },
          severe: {
            symptoms: 'Lupus nephritis, severe cytopenias, CNS lupus (seizures, psychosis), vasculitis, severe organ involvement, life-threatening complications.',
            action: 'High-dose steroids, cyclophosphamide, rituximab, mycophenolate, specialist care'
          },
          critical: {
            symptoms: 'Severe flare with multi-organ failure, catastrophic antiphospholipid syndrome, rapidly progressive glomerulonephritis, CNS crisis.',
            action: 'ICU care, pulse steroids, plasmapheresis, aggressive immunosuppression'
          }
        },
        comorbidities: 'Pregnancy high-risk requiring specialist care; cardiovascular disease accelerated; infections from immunosuppression; osteoporosis from steroid use; depression/anxiety common.'
      },
      {
        name: 'Rheumatoid Arthritis',
        category: 'Autoimmune',
        tags: ['Autoimmune', 'Joint Disease', 'Progressive'],
        severityLevels: {
          mild: {
            symptoms: 'Symmetric inflammatory arthritis affecting small joints (hands, feet), morning stiffness >30 minutes, positive RF or anti-CCP, mild joint swelling/tenderness, functional class I-II.',
            action: 'DMARDs (methotrexate), NSAIDs, physical therapy'
          },
          moderate: {
            symptoms: 'Persistent polyarthritis despite DMARDs, moderate functional limitation, elevated inflammatory markers, early joint erosions on X-ray, requires biologic therapy.',
            action: 'Biologic DMARDs (anti-TNF, JAK inhibitors), steroids for flares'
          },
          severe: {
            symptoms: 'Severe joint deformities, significant functional impairment (class III-IV), extra-articular manifestations (rheumatoid nodules, vasculitis, lung involvement), refractory disease.',
            action: 'Combination biologic therapy, surgical intervention, disability support'
          },
          critical: null
        },
        comorbidities: 'Cardiovascular disease increased risk; osteoporosis from disease and steroids; Sjögren\'s syndrome commonly coexists; increased infection risk from immunosuppression.'
      },
      {
        name: 'Sjögren\'s Syndrome',
        category: 'Autoimmune',
        tags: ['Autoimmune', 'Dry Eyes/Mouth'],
        severityLevels: {
          mild: {
            symptoms: 'Dry eyes and mouth (sicca symptoms), parotid gland swelling, dental caries, managed with symptomatic treatment.',
            action: 'Artificial tears and saliva substitutes, dental care, hydroxychloroquine'
          },
          moderate: {
            symptoms: 'Severe dry eyes (keratoconjunctivitis sicca), vaginal dryness, arthralgia, fatigue, Raynaud\'s phenomenon, requires systemic therapy.',
            action: 'Immunomodulatory therapy, pilocarpine for sicca, symptom management'
          },
          severe: {
            symptoms: 'Extraglandular manifestations: interstitial lung disease, renal tubular acidosis, peripheral neuropathy, vasculitis, lymphoma risk (44-fold increased), severe disability.',
            action: 'Aggressive immunosuppression, organ-specific treatment, lymphoma surveillance'
          },
          critical: null
        },
        comorbidities: 'Often secondary to RA or SLE; pregnancy requires monitoring for neonatal lupus and heart block (anti-Ro/SSA antibodies); dental disease accelerated; depression from chronic symptoms.'
      },
      {
        name: 'Multiple Sclerosis (MS)',
        category: 'Autoimmune',
        tags: ['Demyelinating', 'Neurological', 'Women-Predominant', 'ICD-11: 8A40'],
        severityLevels: {
          mild: {
            symptoms: 'Clinically isolated syndrome or early RRMS: single episode of neurological symptoms (optic neuritis, sensory changes, mild weakness) with good recovery.',
            action: 'Disease-modifying therapy initiation (interferon-beta, glatiramer), MRI monitoring'
          },
          moderate: {
            symptoms: 'Relapsing-remitting MS: persistent fatigue, cognitive changes, bladder dysfunction, balance problems, moderate disability (EDSS 3-5).',
            action: 'High-efficacy DMTs (natalizumab, ocrelizumab), symptom management, rehabilitation'
          },
          severe: {
            symptoms: 'Secondary progressive MS: gradual disability accumulation without relapses, significant motor impairment, wheelchair dependence, severe cognitive changes (EDSS 6-8).',
            action: 'Siponimod, cladribine, symptomatic management, multidisciplinary rehabilitation'
          },
          critical: {
            symptoms: 'Malignant MS: rapid severe disability progression, frequent hospitalizations, EDSS >8, possible respiratory compromise.',
            action: 'Hematopoietic stem cell transplantation consideration, aggressive immunosuppression'
          }
        },
        comorbidities: 'Depression in ~50% of patients; anxiety disorders; fatigue compounded by thyroid dysfunction; osteoporosis from corticosteroids; pregnancy often reduces relapse rate, postpartum worsening common.'
      },
      {
        name: 'Antiphospholipid Syndrome (APS)',
        category: 'Autoimmune',
        tags: ['Thrombosis', 'Pregnancy Loss', 'Coagulation', 'ICD-11: L13.3'],
        severityLevels: {
          mild: {
            symptoms: 'Asymptomatic antibody positivity (lupus anticoagulant, anti-cardiolipin), mild thrombocytopenia, livedo reticularis.',
            action: 'Low-dose aspirin, avoid OCP, close monitoring'
          },
          moderate: {
            symptoms: 'Recurrent pregnancy loss (3+ early losses or 1+ late loss), or first venous thromboembolic event.',
            action: 'LMWH + aspirin during pregnancy; warfarin for thrombosis; hematology referral'
          },
          severe: {
            symptoms: 'Arterial thrombosis (stroke, MI), recurrent VTE, severe thrombocytopenia, Libman-Sacks endocarditis.',
            action: 'Long-term anticoagulation, hydroxychloroquine adjunct, specialist co-management'
          },
          critical: {
            symptoms: 'Catastrophic APS (CAPS): simultaneous multi-organ thrombosis within 1 week, multi-organ failure, microangiopathic hemolysis — mortality 30-50%.',
            action: 'ICU, heparin, plasmapheresis, high-dose corticosteroids, IVIG, rituximab'
          }
        },
        comorbidities: '30% of SLE patients have APS; OCP contraindicated (thrombosis risk); hypertension increases stroke risk; recurrent pregnancy loss is major morbidity.'
      },
      {
        name: 'Fibromyalgia',
        category: 'Autoimmune',
        tags: ['Chronic Pain', 'Women-Predominant', 'Functional', 'ICD-11: MG30.01'],
        severityLevels: {
          mild: {
            symptoms: 'Widespread musculoskeletal pain, fatigue, sleep disturbance, cognitive symptoms (fibro fog), manageable with lifestyle measures.',
            action: 'Aerobic exercise, sleep hygiene, patient education, cognitive behavioral therapy'
          },
          moderate: {
            symptoms: 'Significant daily pain interfering with work and social activities, poor sleep, moderate depression/anxiety, irritable bowel symptoms.',
            action: 'Duloxetine, pregabalin, or milnacipran; multidisciplinary pain program; low-impact exercise'
          },
          severe: {
            symptoms: 'Severe diffuse pain, profound fatigue, inability to work, significant cognitive impairment, severe mood disorders, functional disability.',
            action: 'Combination pharmacotherapy, intensive multidisciplinary pain rehabilitation, psychiatric co-management'
          },
          critical: null
        },
        comorbidities: 'Depression and anxiety very common (30-50%); IBS frequently co-occurs; chronic fatigue syndrome overlap; migraine; temporomandibular disorder; interstitial cystitis; sleep disorders.'
      }
    ]
  },

neurological: {
    id: 'neurological',
    title: 'Neurological & Psychiatric Disorders',
    icon: 'fas fa-brain',
    color: '#42a5f5',
    image: 'https://images.unsplash.com/photo-1617791160588-241658c0f566?w=800&q=80',
    description: 'Conditions affecting the nervous system and mental health',
    preview: 'Brain and mental health conditions including migraines, postpartum depression, perinatal anxiety, and neuromuscular disorders',
    exampleDiseases: ['Migraine', 'Epilepsy', 'Postpartum Depression', 'Myasthenia Gravis'],
    diseases: [
      {
        name: 'Migraine',
        category: 'Neurological',
        tags: ['Headache', 'Chronic Pain'],
        severityLevels: {
          mild: {
            symptoms: 'Episodic migraine <4 days/month, moderate unilateral throbbing headache with nausea, photophobia, phonophobia, responsive to NSAIDs or triptans.',
            action: 'Acute treatment with NSAIDs or triptans, lifestyle modifications'
          },
          moderate: {
            symptoms: 'Frequent migraines 4-14 days/month, significant disability, aura in some cases, requires both acute and preventive therapy.',
            action: 'Preventive medications (beta-blockers, topiramate, CGRP inhibitors), acute therapy'
          },
          severe: {
            symptoms: 'Chronic migraine ≥15 headache days/month, medication overuse headache, severe functional impairment, frequent ER visits, status migrainosus.',
            action: 'Botox injections, CGRP monoclonal antibodies, detoxification from overused medications, specialist referral'
          },
          critical: null
        },
        comorbidities: 'Depression and anxiety commonly coexist; stroke risk increased with migraine with aura; epilepsy; menstrual migraine; PCOS; hormonal contraceptives can trigger.'
      },
      {
        name: 'Perinatal Mental Health (Depression & Anxiety)',
        category: 'Neurological',
        tags: ['Mental Health', 'Pregnancy', 'Postpartum'],
        severityLevels: {
          mild: {
            symptoms: 'Mild anxiety or depressive symptoms during pregnancy or postpartum, worrying, mood swings, able to function with support.',
            action: 'Psychotherapy, support groups, monitoring'
          },
          moderate: {
            symptoms: 'Major depression or anxiety disorder, persistent low mood, excessive worry, panic attacks, impaired bonding, requires treatment.',
            action: 'SSRIs safe in pregnancy/breastfeeding, psychotherapy, close monitoring'
          },
          severe: {
            symptoms: 'Severe depression with suicidal ideation, inability to care for self or infant, psychotic features (postpartum psychosis with delusions/hallucinations).',
            action: 'Psychiatric hospitalization, antipsychotics, intensive treatment, infant safety assessment'
          },
          critical: null
        },
        comorbidities: 'Prior depression increases recurrence risk 50%; anxiety disorders often co-occur; thyroid dysfunction mimics or exacerbates symptoms; obstetric complications increase risk.'
      },
      {
        name: 'Postpartum Depression',
        category: 'Neurological',
        tags: ['Mental Health', 'Postpartum'],
        severityLevels: {
          mild: {
            symptoms: 'Subsyndromal symptoms, occasional tearfulness, mild anxiety, fatigue exceeding normal postpartum, able to care for baby with support.',
            action: 'Support groups, psychotherapy, close monitoring'
          },
          moderate: {
            symptoms: 'Major depression within first year postpartum, persistent low mood, loss of interest, guilt, hopelessness, difficulty bonding, requires antidepressant therapy.',
            action: 'Antidepressants (SSRIs), psychotherapy, family support'
          },
          severe: {
            symptoms: 'Severe depression with suicidal ideation, inability to care for self or infant, psychotic features, requires intensive intervention.',
            action: 'Psychiatric hospitalization, medications, possible mother-baby unit, safety planning'
          },
          critical: null
        },
        comorbidities: 'Prior depression increases recurrence risk 50%; anxiety disorders often co-occur; thyroid dysfunction mimics or exacerbates symptoms; obstetric complications increase risk.'
      },
      {
        name: 'Myasthenia Gravis',
        category: 'Neurological',
        tags: ['Autoimmune', 'Muscle Weakness'],
        severityLevels: {
          mild: {
            symptoms: 'Ocular myasthenia: isolated ocular symptoms (ptosis, diplopia), fatigable weakness, responsive to anticholinesterase medications.',
            action: 'Pyridostigmine, monitoring for generalization'
          },
          moderate: {
            symptoms: 'Generalized myasthenia: limb weakness, bulbar symptoms (dysarthria, dysphagia), fatigability affecting daily activities, requires immunosuppression.',
            action: 'Immunosuppression (prednisone, azathioprine), thymectomy consideration'
          },
          severe: {
            symptoms: 'Myasthenic crisis: respiratory failure requiring mechanical ventilation, severe bulbar weakness with aspiration risk, requires ICU care.',
            action: 'ICU care, mechanical ventilation, plasmapheresis or IVIG, aggressive immunosuppression'
          },
          critical: null
        },
        comorbidities: 'Pregnancy can exacerbate or improve symptoms; thymic abnormalities common; other autoimmune diseases co-occur; infections trigger crises.'
      },
      {
        name: 'Epilepsy',
        category: 'Neurological',
        tags: ['Seizure Disorder', 'Neurological', 'ICD-11: 8A60'],
        severityLevels: {
          mild: {
            symptoms: 'Well-controlled seizures on monotherapy: seizure-free or rare breakthrough seizures, no functional impairment; catamenial epilepsy may worsen perimenstrually.',
            action: 'Antiepileptic drug (AED) therapy, lifestyle modifications, seizure diary, pregnancy planning'
          },
          moderate: {
            symptoms: 'Incomplete seizure control on monotherapy, requiring polytherapy, some functional limitations, menstrual-related worsening common.',
            action: 'AED optimization, hormonal considerations, neurology follow-up; folic acid supplementation'
          },
          severe: {
            symptoms: 'Drug-resistant epilepsy (failure of 2+ appropriate AEDs), frequent seizures impairing daily function, risk of falls and injury, cognitive decline.',
            action: 'Epilepsy surgery evaluation, ketogenic diet, vagal nerve stimulation, responsive neurostimulation'
          },
          critical: {
            symptoms: 'Status epilepticus: continuous seizure activity >5 minutes or repeated seizures without recovery — life-threatening, risk of brain injury.',
            action: 'Emergency IV benzodiazepines, escalating IV AEDs, ICU care, identify and treat underlying cause'
          }
        },
        comorbidities: 'Teratogenic AEDs (valproate) require strict contraception planning; folic acid critical in pregnancy; PCOS from valproate; osteoporosis from enzyme-inducing AEDs; depression and anxiety common.'
      },
      {
        name: 'Anxiety & Panic Disorders',
        category: 'Neurological',
        tags: ['Mental Health', 'Women-Predominant', 'ICD-11: 6B00'],
        severityLevels: {
          mild: {
            symptoms: 'Mild generalized anxiety, occasional panic attacks, limited avoidance, functional at work and home, manageable with coping strategies.',
            action: 'Psychoeducation, CBT self-help, mindfulness, lifestyle modification'
          },
          moderate: {
            symptoms: 'Frequent anxiety and panic attacks affecting daily activities, significant avoidance behaviors, sleep disturbance, somatic symptoms (palpitations, chest tightness).',
            action: 'CBT with therapist, SSRI/SNRI pharmacotherapy, breathing techniques, graduated exposure'
          },
          severe: {
            symptoms: 'Severe panic disorder with agoraphobia, unable to leave home without significant distress, severe functional impairment, comorbid depression.',
            action: 'Intensive CBT, pharmacotherapy optimization, possible short-term benzodiazepines, psychiatry referral'
          },
          critical: null
        },
        comorbidities: 'Depression co-occurs in >50%; PMDD amplifies anxiety perimenstrually; thyroid disease can mimic/worsen anxiety; cardiovascular disease exacerbates panic; worsens during perimenopause.'
      }
    ]
  },

infections: {
    id: 'infections',
    title: 'Genitourinary & Gynecological Infections',
    icon: 'fas fa-disease',
    color: '#26a69a',
    image: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800&q=80',
    description: 'Infectious conditions affecting the female genitourinary system',
    preview: 'Gynecological infections and STIs including UTIs, bacterial vaginosis, chlamydia, HPV, herpes, and syphilis with evidence-based management',
    exampleDiseases: ['UTI', 'Chlamydia & Gonorrhea', 'HPV & Dysplasia', 'Genital Herpes'],
    diseases: [
      {
        name: 'Urinary Tract Infection (UTI)',
        category: 'Infections',
        tags: ['Infection', 'Common'],
        severityLevels: {
          mild: {
            symptoms: 'Uncomplicated cystitis: dysuria, urinary frequency, urgency, suprapubic discomfort, no systemic symptoms.',
            action: 'Short-course oral antibiotics (nitrofurantoin, trimethoprim-sulfamethoxazole)'
          },
          moderate: {
            symptoms: 'Complicated UTI or pyelonephritis: fever, chills, flank pain, nausea, vomiting, costovertebral angle tenderness.',
            action: 'Hospitalization consideration, IV antibiotics if severe, 7-14 day treatment'
          },
          severe: {
            symptoms: 'Urosepsis: sepsis syndrome with hypotension, tachycardia, altered mental status, acute kidney injury, requires ICU care.',
            action: 'ICU admission, broad-spectrum IV antibiotics, fluid resuscitation, source control'
          },
          critical: null
        },
        comorbidities: 'Diabetes increases infection severity and recurrence; pregnancy requires prompt treatment to prevent pyelonephritis; neurogenic bladder/incomplete emptying predisposes to recurrent UTIs; immunosuppression increases atypical pathogen risk.'
      },
      {
        name: 'Vaginal Yeast Infection',
        category: 'Infections',
        tags: ['Infection', 'Common', 'Recurrent'],
        severityLevels: {
          mild: {
            symptoms: 'Uncomplicated vulvovaginal candidiasis: vulvovaginal itching, thick white cottage cheese-like discharge, vulvar erythema, rare episodes (<4/year).',
            action: 'Topical azoles (clotrimazole, miconazole) or single-dose fluconazole'
          },
          moderate: {
            symptoms: 'Complicated/recurrent VVC: severe symptoms, extensive vulvovaginal inflammation, recurrent VVC (≥4 episodes/year), requires extended therapy.',
            action: 'Extended antifungal therapy, maintenance suppression therapy'
          },
          severe: {
            symptoms: 'Severe vulvovaginal inflammation, non-albicans species (resistant to azoles), immunocompromised host.',
            action: 'Culture-directed therapy, longer treatment courses, specialist consultation'
          },
          critical: null
        },
        comorbidities: 'Diabetes (especially poorly controlled) markedly increases recurrence; immunosuppression allows severe/refractory infections; pregnancy increases susceptibility; antibiotic use disrupts normal flora.'
      },
      {
        name: 'Bacterial Vaginosis',
        category: 'Infections',
        tags: ['Infection', 'Common'],
        severityLevels: {
          mild: {
            symptoms: 'Thin gray-white malodorous discharge, fishy odor especially after intercourse, no significant irritation, positive whiff test.',
            action: 'Metronidazole or clindamycin (oral or vaginal)'
          },
          moderate: {
            symptoms: 'Persistent symptoms despite treatment, recurrent BV (>3 episodes/year), significant malodor affecting quality of life.',
            action: 'Extended or suppressive therapy, partner treatment consideration'
          },
          severe: null,
          critical: null
        },
        comorbidities: 'Pregnancy increases risk of preterm labor and premature rupture of membranes; HIV increases susceptibility; douching exacerbates; multiple sexual partners increase recurrence.'
      },
      {
        name: 'Interstitial Cystitis/Painful Bladder Syndrome',
        category: 'Infections',
        tags: ['Chronic Pain', 'Bladder'],
        severityLevels: {
          mild: {
            symptoms: 'Urinary urgency/frequency with mild bladder discomfort, symptoms manageable with dietary modification, voids 8-12 times/day.',
            action: 'Dietary modifications, bladder training, stress management'
          },
          moderate: {
            symptoms: 'Moderate-severe pelvic pain, significant urinary frequency (>12 voids/day), nocturia >3 times/night, dyspareunia, impacting work/social activities.',
            action: 'Pentosan polysulfate, amitriptyline, bladder instillations, pelvic floor therapy'
          },
          severe: {
            symptoms: 'Debilitating chronic pain, extreme urinary frequency (>20 voids/day), severe functional impairment, depression, small bladder capacity with Hunner lesions.',
            action: 'Cystoscopy with hydrodistention, fulguration of Hunner lesions, neuromodulation, pain management'
          },
          critical: null
        },
        comorbidities: 'Fibromyalgia, IBS, and chronic fatigue syndrome commonly co-occur; endometriosis compounds pelvic pain; depression/anxiety amplify symptom perception.'
      },
      {
        name: 'Chlamydia & Gonorrhea (STIs)',
        category: 'Infections',
        tags: ['STI', 'Bacterial', 'Reportable', 'ICD-11: 1A73'],
        severityLevels: {
          mild: {
            symptoms: 'Asymptomatic in 70-80% of women; when symptomatic: increased vaginal discharge, mild dysuria, intermenstrual spotting.',
            action: 'Annual screening in sexually active women under 25; azithromycin or doxycycline (chlamydia); ceftriaxone (gonorrhea); partner treatment'
          },
          moderate: {
            symptoms: 'Cervicitis: mucopurulent cervical discharge, cervical friability, contact bleeding, lower abdominal discomfort.',
            action: 'Dual antibiotic therapy, partner notification and treatment, test of cure for gonorrhea'
          },
          severe: {
            symptoms: 'Pelvic inflammatory disease (PID): severe pelvic/abdominal pain, fever, adnexal tenderness, tubo-ovarian abscess risk, infertility risk.',
            action: 'IV antibiotics if hospitalized, outpatient treatment for mild PID, surgery for abscess'
          },
          critical: {
            symptoms: 'Disseminated gonococcal infection: septic arthritis, skin lesions, tenosynovitis; rarely endocarditis or meningitis.',
            action: 'IV ceftriaxone, hospitalization, specialist management'
          }
        },
        comorbidities: 'HIV co-infection increases transmission; pregnancy complications (preterm birth, neonatal conjunctivitis); co-infection with other STIs common; untreated PID causes tubal infertility and ectopic pregnancy.'
      },
      {
        name: 'Human Papillomavirus (HPV) & Cervical Dysplasia',
        category: 'Infections',
        tags: ['STI', 'Viral', 'Cancer Prevention', 'ICD-11: 1E80'],
        severityLevels: {
          mild: {
            symptoms: 'Most HPV infections asymptomatic; low-risk HPV: genital warts; low-grade cervical intraepithelial neoplasia (CIN 1).',
            action: 'HPV vaccination (ages 9-45); cervical cytology and HPV co-testing; treat warts; CIN 1 — observation'
          },
          moderate: {
            symptoms: 'High-grade cervical dysplasia (CIN 2-3): usually asymptomatic, detected on screening; high-risk HPV types 16/18.',
            action: 'Colposcopy, LEEP or cone biopsy; treatment prevents progression to cancer'
          },
          severe: {
            symptoms: 'Early invasive cervical cancer (Stage I-IIA): postcoital bleeding, abnormal discharge, visible lesion on cervix.',
            action: 'Surgery (radical hysterectomy) or chemoradiation; gynecologic oncologist referral'
          },
          critical: {
            symptoms: 'Advanced cervical cancer (Stage IIB-IVB): pelvic pain, hematuria, rectal bleeding, hydronephrosis, distant metastases.',
            action: 'Platinum-based chemoradiation, bevacizumab, immunotherapy; palliative care if stage IVB'
          }
        },
        comorbidities: 'HIV dramatically increases HPV persistence and cancer risk; immunosuppression increases risk; smoking doubles cervical cancer risk; OCP use >5 years slightly increases risk.'
      },
      {
        name: 'Genital Herpes (HSV-2)',
        category: 'Infections',
        tags: ['STI', 'Viral', 'Chronic', 'ICD-11: 1F00'],
        severityLevels: {
          mild: {
            symptoms: 'Asymptomatic shedding common; mild recurrences: small vesicles/ulcers, mild burning/itching, fewer than 6 episodes per year.',
            action: 'Episodic antiviral therapy (acyclovir, valacyclovir); safe sex counseling'
          },
          moderate: {
            symptoms: 'Moderate genital ulcers, pain, dysuria, recurrent outbreaks >6 per year, psychosocial distress.',
            action: 'Daily suppressive antiviral therapy; reduces transmission by 50%; psychosocial support'
          },
          severe: {
            symptoms: 'Primary first outbreak: extensive bilateral ulcers, severe dysuria, urinary retention, inguinal lymphadenopathy, fever, flu-like illness.',
            action: 'IV acyclovir if systemically ill; urinary catheterization if retention; 7-10 day antiviral course'
          },
          critical: {
            symptoms: 'Neonatal herpes (from delivery during active outbreak); HSV encephalitis (rare); disseminated herpes in immunocompromised — potentially fatal.',
            action: 'Cesarean delivery if active outbreak at term; IV acyclovir for neonatal/encephalitis HSV'
          }
        },
        comorbidities: 'HIV co-infection worsens severity; suppression from 36 weeks prevents neonatal herpes; depression and relationship difficulties common; stress, menstruation, UV light trigger recurrences.'
      }
    ]
  },

cardiovascular: {
    id: 'cardiovascular',
    title: 'Cardiovascular Disorders',
    icon: 'fas fa-heart-pulse',
    color: '#ef5350',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&q=80',
    description: 'Heart and vascular conditions with gender-specific presentations',
    preview: 'Women experience heart disease differently. Learn about coronary artery disease, microvascular angina, and heart attacks in women',
    exampleDiseases: ['Coronary Artery Disease', 'Hypertension', 'Stroke', 'Heart Failure'],
    diseases: [
      {
        name: 'Coronary Artery Disease',
        category: 'Cardiovascular',
        tags: ['Heart Disease', 'Life-Threatening'],
        severityLevels: {
          mild: {
            symptoms: 'Stable angina: predictable chest pain/pressure with exertion, relieved by rest or nitroglycerin, preserved exercise capacity with medical management.',
            action: 'Antiplatelet therapy, statins, beta-blockers, risk factor modification'
          },
          moderate: {
            symptoms: 'Unstable angina/NSTEMI: rest angina, crescendo pattern, troponin elevation (NSTEMI), requires urgent evaluation.',
            action: 'Hospital admission, antiplatelet therapy, cardiac catheterization consideration'
          },
          severe: {
            symptoms: 'STEMI or acute heart failure: ST-elevation MI requiring emergent intervention, cardiogenic shock, acute heart failure with pulmonary edema.',
            action: 'Emergency PCI or thrombolysis, intensive care, mechanical support if needed'
          },
          critical: {
            symptoms: 'Cardiac arrest, cardiogenic shock refractory to treatment, ventricular arrhythmias.',
            action: 'Advanced cardiac life support, mechanical circulatory support, transplant evaluation'
          }
        },
        comorbidities: 'Diabetes increases CAD risk 2-4 fold and presents atypically; hypertension compounds vascular damage; chronic kidney disease worsens outcomes; depression increases post-MI mortality.'
      },
      {
        name: 'Microvascular Angina',
        category: 'Cardiovascular',
        tags: ['Heart Disease', 'Women-Specific'],
        severityLevels: {
          mild: {
            symptoms: 'Intermittent chest pain during stress, normal coronary angiography, mild exercise limitation, responsive to antianginal medications.',
            action: 'Antianginal therapy, risk factor modification, cardiac rehabilitation'
          },
          moderate: {
            symptoms: 'Frequent angina limiting daily activities, poor quality of life, refractory to standard therapy, often misdiagnosed.',
            action: 'Intensive medical therapy, ranolazine, ACE inhibitors, specialist consultation'
          },
          severe: {
            symptoms: 'Severe angina with minimal exertion, significantly impaired quality of life, associated with adverse cardiac events despite normal coronaries.',
            action: 'Aggressive symptom management, cardiac rehabilitation, pain management'
          },
          critical: null
        },
        comorbidities: 'Diabetes increases microvascular dysfunction; hypertension compounds endothelial damage; migraine and Raynaud\'s suggest vasospastic component; predominantly affects women.'
      },
      {
        name: 'Hypertension in Women',
        category: 'Cardiovascular',
        tags: ['Blood Pressure', 'Chronic', 'Women-Specific', 'ICD-11: BA80'],
        severityLevels: {
          mild: {
            symptoms: 'Stage 1 hypertension (130-139/80-89 mmHg): usually asymptomatic, detected on screening; may be OCP-induced or white coat hypertension.',
            action: 'Lifestyle modifications (DASH diet, weight loss, exercise, sodium restriction), home BP monitoring'
          },
          moderate: {
            symptoms: 'Stage 2 hypertension (140/90+ mmHg): often asymptomatic; OCP-induced hypertension; risk of end-organ damage; gestational hypertension in pregnancy.',
            action: 'Pharmacotherapy (ACE inhibitors, ARBs, calcium channel blockers, thiazides), OCP reassessment'
          },
          severe: {
            symptoms: 'Resistant hypertension (3+ medications); hypertensive urgency (180/110+ mmHg) with headache, visual changes, chest pain, shortness of breath.',
            action: 'Multiple antihypertensives, rule out secondary causes, organ damage evaluation'
          },
          critical: {
            symptoms: 'Hypertensive emergency: BP 180/120+ with acute end-organ damage (encephalopathy, aortic dissection, AKI, pulmonary edema, eclampsia).',
            action: 'IV antihypertensives (labetalol, nicardipine, hydralazine in pregnancy), ICU monitoring'
          }
        },
        comorbidities: 'OCP raises BP in 5% of women; pregnancy-related hypertension predicts lifetime cardiovascular risk; diabetes compounds end-organ damage; menopause increases risk; doubles cardiovascular event risk.'
      },
      {
        name: 'Stroke & Cerebrovascular Disease',
        category: 'Cardiovascular',
        tags: ['Neurological', 'Vascular', 'Emergency', 'ICD-11: 8B20'],
        severityLevels: {
          mild: {
            symptoms: 'TIA (transient ischemic attack): brief focal neurological deficits (speech, vision, limb weakness) resolving completely within 24 hours.',
            action: 'Emergency evaluation (CT/MRI), dual antiplatelet therapy, echocardiography, carotid imaging, risk factor management'
          },
          moderate: {
            symptoms: 'Minor ischemic stroke: focal neurological deficits with mild functional impairment, modified Rankin Scale 1-2.',
            action: 'IV tPA if within 4.5h; mechanical thrombectomy if large vessel occlusion; secondary prevention'
          },
          severe: {
            symptoms: 'Moderate-severe stroke: significant motor, cognitive, or speech deficits; dysphagia; hemispatial neglect; requires rehabilitation, mRS 3-4.',
            action: 'Stroke unit care, IV tPA/thrombectomy, intensive rehabilitation, address risk factors'
          },
          critical: {
            symptoms: 'Massive hemispheric stroke with herniation, brainstem stroke, subarachnoid hemorrhage (thunderclap headache), hemorrhagic stroke — life-threatening.',
            action: 'Neurosurgical intervention (hemicraniectomy, EVD), ICU management, supportive care'
          }
        },
        comorbidities: 'Migraine with aura increases ischemic stroke risk 2-3x (especially with OCP and smoking); atrial fibrillation major risk factor; APS causes strokes in young women; pregnancy and postpartum are stroke risk periods.'
      },
      {
        name: 'DVT & Pulmonary Embolism',
        category: 'Cardiovascular',
        tags: ['Thrombosis', 'Venous', 'Women-Specific', 'ICD-11: BD71'],
        severityLevels: {
          mild: {
            symptoms: 'Distal DVT (below-knee): unilateral leg swelling, warmth, tenderness; low-risk PE: mild dyspnea, normal hemodynamics.',
            action: 'DOAC anticoagulation (rivaroxaban, apixaban); compression stockings; monitor for proximal extension'
          },
          moderate: {
            symptoms: 'Proximal DVT (above-knee): significant limb swelling, embolization risk; submassive PE: right heart strain, elevated troponin, normotensive.',
            action: '3-6 months anticoagulation; consider catheter-directed thrombolysis for submassive PE'
          },
          severe: {
            symptoms: 'Massive PE: hemodynamic instability, hypotension, tachycardia, hypoxia, syncope, right heart failure, cardiogenic shock.',
            action: 'Systemic thrombolysis (tPA), surgical embolectomy, catheter-directed therapy, ICU care'
          },
          critical: {
            symptoms: 'Cardiac arrest from massive PE; amniotic fluid embolism in pregnancy (sudden cardiovascular collapse, coagulopathy).',
            action: 'CPR, emergency embolectomy, ECMO, systemic lysis; immediate delivery for amniotic fluid embolism'
          }
        },
        comorbidities: 'OCP increases VTE risk 3-4x; pregnancy and postpartum 5-10x VTE risk; APS causes recurrent VTE; factor V Leiden increases risk; cancer-associated thrombosis; long-haul travel risk.'
      },
      {
        name: 'Heart Failure in Women',
        category: 'Cardiovascular',
        tags: ['Cardiac', 'Chronic', 'Women-Specific', 'ICD-11: BD10'],
        severityLevels: {
          mild: {
            symptoms: 'NYHA Class I-II: symptoms only with more than ordinary activity; preserved or reduced ejection fraction; HFpEF more common in women.',
            action: 'ACE inhibitors/ARBs, beta-blockers, diuretics; salt/fluid restriction'
          },
          moderate: {
            symptoms: 'NYHA Class III: symptoms with minimal exertion, unable to climb stairs without stopping, significant activity limitation, peripheral edema, orthopnea.',
            action: 'Optimized guideline-directed medical therapy, CRT if LBBB, cardiac rehabilitation'
          },
          severe: {
            symptoms: 'NYHA Class III-IV: symptoms at rest, frequent hospitalizations, cardiac cachexia, severe edema, anasarca, renal impairment from low output.',
            action: 'Advanced therapies (LVAD), transplant evaluation, IV diuresis during acute decompensation'
          },
          critical: {
            symptoms: 'Cardiogenic shock, acute pulmonary edema requiring ventilation, decompensated HF needing mechanical circulatory support.',
            action: 'ICU, inotropes, IABP, Impella, ECMO, emergent transplant listing'
          }
        },
        comorbidities: 'HFpEF more common in women (elderly, hypertensive, obese, diabetic); peripartum cardiomyopathy is pregnancy-specific; atrial fibrillation precipitates decompensation; depression worsens HF outcomes.'
      }
    ]
  },

respiratory: {
    id: 'respiratory',
    title: 'Respiratory Disorders',
    icon: 'fas fa-lungs',
    color: '#66bb6a',
    image: 'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f33?w=800&q=80',
    description: 'Lung and airway conditions affecting women',
    preview: 'Chronic respiratory conditions including COPD, asthma complications, and lung health in women smokers and non-smokers',
    exampleDiseases: ['COPD', 'Asthma', 'Pulmonary Hypertension'],
    diseases: [
      {
        name: 'Chronic Obstructive Pulmonary Disease (COPD)',
        category: 'Respiratory',
        tags: ['Chronic Disease', 'Smoking-Related'],
        severityLevels: {
          mild: {
            symptoms: 'GOLD 1: FEV1 ≥80% predicted, mild dyspnea on exertion, occasional cough, minimal impact on activities.',
            action: 'Short-acting bronchodilators, smoking cessation, vaccinations'
          },
          moderate: {
            symptoms: 'GOLD 2: FEV1 50-79% predicted, dyspnea walking on level ground, chronic productive cough, requires regular bronchodilator therapy.',
            action: 'Long-acting bronchodilators, pulmonary rehabilitation, inhaled corticosteroids if indicated'
          },
          severe: {
            symptoms: 'GOLD 3-4: FEV1 <50% predicted, severe dyspnea limiting self-care, frequent exacerbations, chronic respiratory failure, cor pulmonale.',
            action: 'Supplemental oxygen, long-term oxygen therapy, consider lung volume reduction'
          },
          critical: {
            symptoms: 'Acute exacerbation with respiratory failure, hypercapnia, altered consciousness, requires ICU care.',
            action: 'ICU admission, mechanical ventilation consideration, systemic steroids, antibiotics'
          }
        },
        comorbidities: 'Cardiovascular disease common comorbidity; osteoporosis from steroid use; anxiety/depression reduce quality of life; cachexia indicates poor prognosis.'
      },
      {
        name: 'Asthma',
        category: 'Respiratory',
        tags: ['Obstructive', 'Allergic', 'Women-Predominant in Adults', 'ICD-11: CA23'],
        severityLevels: {
          mild: {
            symptoms: 'Intermittent asthma: symptoms 2 or fewer days/week, nighttime awakenings 2 or fewer per month, FEV1 80%+, SABA use 2 or fewer days/week.',
            action: 'Short-acting beta-agonist (SABA) as needed; avoid triggers; written asthma action plan'
          },
          moderate: {
            symptoms: 'Persistent asthma: daily symptoms, exacerbations affecting activity, nighttime symptoms >1/week, FEV1 60-80%; premenstrual worsening common in women.',
            action: 'Daily inhaled corticosteroid (ICS), SABA as needed; add LABA if uncontrolled; written action plan'
          },
          severe: {
            symptoms: 'Severe persistent: continuous symptoms, frequent nighttime awakening, severe exacerbations requiring oral steroids, FEV1 <60%; difficult-to-control asthma.',
            action: 'High-dose ICS + LABA, biologics (omalizumab, dupilumab, mepolizumab), systemic steroid-sparing agents'
          },
          critical: {
            symptoms: 'Status asthmaticus: severe bronchospasm not responding to bronchodilators, hypoxia, hypercapnia, respiratory exhaustion, risk of respiratory arrest.',
            action: 'Emergency IV/inhaled bronchodilators, systemic steroids, IV magnesium sulfate, heliox, intubation if needed'
          }
        },
        comorbidities: 'Women have worse asthma control than men after puberty; GERD worsens asthma; sinusitis/allergic rhinitis amplify symptoms; premenstrual exacerbations from progesterone; pregnancy requires continuation of asthma medications; obesity worsens control.'
      }
    ]
  },

musculoskeletal: {
    id: 'musculoskeletal',
    title: 'Musculoskeletal & Pain Disorders',
    icon: 'fas fa-bone',
    color: '#8d6e63',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    description: 'Bone, joint, and chronic pain conditions',
    preview: 'Chronic painful conditions from osteoarthritis and low back pain to hidradenitis suppurativa affecting quality of life',
    exampleDiseases: ['Osteoarthritis', 'Chronic Back Pain', 'Hidradenitis Suppurativa'],
    diseases: [
      {
        name: 'Osteoarthritis',
        category: 'Musculoskeletal',
        tags: ['Joint Disease', 'Degenerative', 'Women-Predominant', 'ICD-11: FA00'],
        severityLevels: {
          mild: {
            symptoms: 'Mild joint pain with activity (knee, hip, hand), morning stiffness less than 30 minutes, mild crepitus, preserved range of motion, no bony deformity.',
            action: 'Weight loss, physiotherapy, acetaminophen or topical NSAIDs, low-impact exercise (swimming, cycling)'
          },
          moderate: {
            symptoms: 'Significant joint pain limiting daily activities, Heberden\'s/Bouchard\'s nodes in hands, reduced range of motion, joint swelling, frequent NSAIDs required.',
            action: 'Oral NSAIDs, intraarticular corticosteroid or hyaluronic acid injections, bracing, occupational therapy'
          },
          severe: {
            symptoms: 'Severe joint destruction with pain at rest, significant functional impairment, inability to climb stairs or walk, visible varus/valgus deformity.',
            action: 'Orthopedic referral for joint replacement (total knee/hip arthroplasty); pre-surgical optimization'
          },
          critical: null
        },
        comorbidities: 'Obesity doubles knee OA risk; menopause increases OA risk from estrogen loss; depression amplifies pain perception; opioid dependence risk with chronic pain management; falls and fracture risk with severe OA.'
      },
      {
        name: 'Chronic Low Back Pain',
        category: 'Musculoskeletal',
        tags: ['Chronic Pain', 'Spinal', 'Common', 'ICD-11: ME84'],
        severityLevels: {
          mild: {
            symptoms: 'Intermittent low back pain, no neurological symptoms, minor functional limitation, responds to activity modification and OTC analgesics.',
            action: 'Active exercise program, physiotherapy, heat/cold therapy, reassurance, avoid bed rest'
          },
          moderate: {
            symptoms: 'Persistent pain >12 weeks, significant activity limitation, psychological factors, radiculopathy if disc herniation present.',
            action: 'Multidisciplinary pain program, NSAIDs, gabapentinoids for neuropathic pain, CBT, physiotherapy'
          },
          severe: {
            symptoms: 'Severe persistent pain with functional disability, failed multiple treatment modalities, severe radiculopathy, major psychological impact.',
            action: 'Specialist referral, epidural steroid injections, facet joint injections, spinal cord stimulation; surgery if structural cause'
          },
          critical: {
            symptoms: 'Cauda equina syndrome: acute saddle anesthesia, bilateral leg weakness, urinary/fecal retention or incontinence — surgical emergency.',
            action: 'Emergency MRI, immediate neurosurgical referral for decompressive surgery within 24-48 hours'
          }
        },
        comorbidities: 'Depression strongly bidirectionally associated; sleep disturbance; obesity; pregnancy (especially third trimester); endometriosis can cause low back pain; smoking delays recovery.'
      },
      {
        name: 'Hidradenitis Suppurativa',
        category: 'Musculoskeletal',
        tags: ['Chronic Disease', 'Painful'],
        severityLevels: {
          mild: {
            symptoms: 'Hurley Stage I: isolated abscesses without scarring or sinus tracts, primarily axillae and groin, managed with antibiotics and incision/drainage.',
            action: 'Topical/oral antibiotics, warm compresses, lifestyle modifications'
          },
          moderate: {
            symptoms: 'Hurley Stage II: recurrent abscesses with sinus tract formation, limited scarring, more extensive involvement, requires systemic therapy.',
            action: 'Biologics (adalimumab), systemic antibiotics, surgical drainage'
          },
          severe: {
            symptoms: 'Hurley Stage III: diffuse involvement with interconnected sinus tracts, extensive scarring, chronic drainage, severe pain, disability.',
            action: 'Wide surgical excision, biologics, wound care, pain management'
          },
          critical: null
        },
        comorbidities: 'Obesity worsens disease severity; diabetes impairs wound healing; inflammatory bowel disease commonly associated; depression from chronic painful disease; metabolic syndrome highly prevalent.'
      }
    ]
  },

ophthalmologic: {
    id: 'ophthalmologic',
    title: 'Ophthalmologic Disorders',
    icon: 'fas fa-eye',
    color: '#9c27b0',
    image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&q=80',
    description: 'Eye conditions with higher prevalence in women',
    preview: 'Vision-threatening conditions from age-related macular degeneration to dry eye syndrome and cataracts',
    exampleDiseases: ['Macular Degeneration', 'Cataracts', 'Dry Eye Syndrome'],
    diseases: [
      {
        name: 'Age-related Macular Degeneration',
        category: 'Ophthalmologic',
        tags: ['Vision Loss', 'Age-Related'],
        severityLevels: {
          mild: {
            symptoms: 'Early/dry AMD: drusen on funduscopy, minimal visual symptoms, mild central vision distortion, managed with AREDS vitamins.',
            action: 'AREDS2 vitamin supplementation, lifestyle modifications, monitoring'
          },
          moderate: {
            symptoms: 'Intermediate/geographic atrophy: larger drusen, pigmentary changes, noticeable vision loss, difficulty with reading and recognizing faces.',
            action: 'AREDS vitamins, low vision aids, regular monitoring'
          },
          severe: {
            symptoms: 'Wet AMD: choroidal neovascularization, sudden severe vision loss, metamorphopsia, central scotoma, requires anti-VEGF injections.',
            action: 'Anti-VEGF intravitreal injections, urgent ophthalmology referral'
          },
          critical: null
        },
        comorbidities: 'Cardiovascular disease shares risk factors; hypertension accelerates progression; smoking dramatically increases risk; diabetes complicates with diabetic retinopathy.'
      },
      {
        name: 'Cataracts',
        category: 'Ophthalmologic',
        tags: ['Vision Loss', 'Age-Related', 'Treatable'],
        severityLevels: {
          mild: {
            symptoms: 'Slight lens opacity, minimal visual symptoms, glare from bright lights, no functional impairment.',
            action: 'Observation, updated glasses prescription'
          },
          moderate: {
            symptoms: 'Progressive lens clouding, decreased visual acuity affecting driving and reading, increased glare sensitivity, color vision changes.',
            action: 'Cataract surgery consideration based on functional impairment'
          },
          severe: {
            symptoms: 'Dense cataract causing significant vision loss, inability to perform daily activities, severe glare disability.',
            action: 'Cataract surgery with intraocular lens implantation'
          },
          critical: null
        },
        comorbidities: 'Diabetes accelerates cataract formation; steroid use causes posterior subcapsular cataracts; uveitis complicates surgery; myopia increases risk.'
      },
      {
        name: 'Dry Eye Syndrome',
        category: 'Ophthalmologic',
        tags: ['Chronic', 'Autoimmune-Associated'],
        severityLevels: {
          mild: {
            symptoms: 'Intermittent ocular irritation, mild burning, occasional blurred vision, responsive to artificial tears.',
            action: 'Artificial tears, lid hygiene, environmental modifications'
          },
          moderate: {
            symptoms: 'Persistent symptoms, foreign body sensation, photophobia, significant impact on computer work/reading, requires prescription medications.',
            action: 'Prescription eye drops (cyclosporine, lifitegrast), punctal plugs'
          },
          severe: {
            symptoms: 'Constant severe ocular pain, corneal epithelial defects, filamentary keratitis, extreme photophobia, significant visual impairment.',
            action: 'Autologous serum tears, scleral contact lenses, specialist management'
          },
          critical: null
        },
        comorbidities: 'Sjögren\'s syndrome causes severe dry eye; rheumatoid arthritis commonly associated; menopause exacerbates; rosacea compounds ocular surface disease.'
      }
    ]
  },

additional: {
    id: 'additional',
    title: 'Additional Common Conditions',
    icon: 'fas fa-hospital',
    color: '#ff7043',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    description: 'Other important women\'s health conditions',
    preview: 'Complex multi-system conditions including infertility, anemia, chronic kidney disease, fatty liver disease, and genetic disorders',
    exampleDiseases: ['Infertility', 'Anemia', 'Chronic Kidney Disease', 'NAFLD'],
    diseases: [
      {
        name: 'Infertility',
        category: 'Additional',
        tags: ['Reproductive Health', 'Fertility'],
        severityLevels: {
          mild: {
            symptoms: 'Primary infertility: inability to conceive after 12 months unprotected intercourse (or 6 months if age ≥35), requires comprehensive evaluation.',
            action: 'Ovulation assessment, semen analysis, tubal patency testing, lifestyle modifications'
          },
          moderate: {
            symptoms: 'Identified causes (anovulation, mild male factor, endometriosis), requires assisted reproduction techniques.',
            action: 'Ovulation induction, IUI, laparoscopy if indicated'
          },
          severe: {
            symptoms: 'Multiple failed ART cycles, poor ovarian reserve, severe male factor, tubal disease, advanced age.',
            action: 'IVF, donor gametes, surrogacy consideration, adoption counseling'
          },
          critical: null
        },
        comorbidities: 'PCOS common cause requiring ovulation induction; endometriosis impairs fertility; thyroid disorders affect conception; diabetes impacts pregnancy outcomes; obesity reduces IVF success.'
      },
      {
        name: 'Thalassemia & Iron Deficiency Anemia',
        category: 'Additional',
        tags: ['Blood Disorder', 'Fatigue'],
        severityLevels: {
          mild: {
            symptoms: 'Iron deficiency anemia: Hgb 10-12 g/dL, fatigue, pallor, managed with oral iron. Thalassemia minor: asymptomatic carrier, mild microcytic anemia.',
            action: 'Oral iron supplementation, dietary counseling for iron deficiency'
          },
          moderate: {
            symptoms: 'Iron deficiency: Hgb <10 g/dL, severe fatigue, dyspnea, pica, restless legs, may require IV iron.',
            action: 'IV iron infusion, investigate underlying cause (GI bleeding, heavy menses)'
          },
          severe: {
            symptoms: 'Thalassemia major: severe anemia requiring regular transfusions, iron overload, hepatosplenomegaly, bone deformities, growth retardation.',
            action: 'Regular blood transfusions, iron chelation therapy, bone marrow transplant consideration'
          },
          critical: null
        },
        comorbidities: 'Heavy menstrual bleeding exacerbates iron deficiency; pregnancy increases iron requirements; malabsorption from celiac/IBD impairs oral iron absorption; heart failure worsens with anemia.'
      },
      {
        name: 'Chronic Kidney Disease',
        category: 'Additional',
        tags: ['Kidney', 'Chronic Disease'],
        severityLevels: {
          mild: {
            symptoms: 'Stage 1-2: eGFR ≥60 mL/min with kidney damage (proteinuria, hematuria), asymptomatic, managed with risk factor modification.',
            action: 'BP control, diabetes management, ACE inhibitors/ARBs, monitoring'
          },
          moderate: {
            symptoms: 'Stage 3-4: eGFR 15-59 mL/min, anemia, bone disease, hypertension, mild uremia, requires nephrology care.',
            action: 'Nephrology referral, medication dose adjustments, manage complications'
          },
          severe: {
            symptoms: 'Stage 5/ESRD: eGFR <15 mL/min, severe uremia, fluid overload, electrolyte abnormalities, requires dialysis.',
            action: 'Dialysis initiation, transplant evaluation, vascular access placement'
          },
          critical: null
        },
        comorbidities: 'Diabetes leading cause of ESRD; hypertension both cause and complication; cardiovascular disease major mortality risk; anemia from EPO deficiency; bone disease from mineral metabolism.'
      },
      {
        name: 'Non-Alcoholic Fatty Liver Disease',
        category: 'Additional',
        tags: ['Liver', 'Metabolic'],
        severityLevels: {
          mild: {
            symptoms: 'Simple steatosis: hepatic steatosis on imaging, elevated ALT/AST, asymptomatic, managed with weight loss.',
            action: 'Weight loss, exercise, diet modification, treat metabolic syndrome'
          },
          moderate: {
            symptoms: 'NASH: non-alcoholic steatohepatitis with inflammation and hepatocyte injury, persistent transaminase elevation, risk of fibrosis progression.',
            action: 'Weight loss, vitamin E or pioglitazone, regular monitoring, liver biopsy if indicated'
          },
          severe: {
            symptoms: 'Cirrhosis: advanced fibrosis/cirrhosis, portal hypertension, ascites, varices, hepatic encephalopathy, hepatocellular carcinoma risk.',
            action: 'Cirrhosis management, HCC surveillance, transplant evaluation'
          },
          critical: null
        },
        comorbidities: 'Metabolic syndrome component; type 2 diabetes major risk factor; obesity central to pathogenesis; PCOS commonly associated; cardiovascular disease increased risk.'
      },
      {
        name: 'Turner Syndrome',
        category: 'Additional',
        tags: ['Genetic', 'Endocrine'],
        severityLevels: {
          mild: {
            symptoms: '45,X karyotype, short stature, gonadal dysgenesis with primary amenorrhea, requires growth hormone and estrogen replacement.',
            action: 'Growth hormone therapy, estrogen replacement at puberty, monitoring'
          },
          moderate: {
            symptoms: 'Cardiovascular anomalies (coarctation, bicuspid aortic valve), renal abnormalities, lymphedema, hearing loss.',
            action: 'Cardiology surveillance, echocardiography, audiometry, nephrology evaluation'
          },
          severe: {
            symptoms: 'Severe cardiovascular disease, aortic dissection risk, type 2 diabetes, osteoporosis, infertility.',
            action: 'Multidisciplinary care, cardiovascular surgery if needed, donor eggs for fertility'
          },
          critical: null
        },
        comorbidities: 'Hypothyroidism common; hearing loss progressive; type 2 diabetes risk increased; cardiovascular disease major morbidity; osteoporosis without estrogen replacement; infertility requiring donor eggs.'
      }
    ]
  },

breast: {
    id: 'breast',
    title: 'Breast Disorders',
    icon: 'fas fa-ribbon',
    color: '#f48fb1',
    image: 'https://images.unsplash.com/photo-1578496781379-7dcfb995293d?w=800&q=80',
    description: 'Benign and malignant breast conditions',
    preview: 'Breast health from benign fibrocystic disease to screening, prevention, and early detection of breast abnormalities',
    exampleDiseases: ['Fibrocystic Breast Disease', 'Breast Pain', 'Breast Lumps'],
    diseases: [
      {
        name: 'Fibrocystic Breast Disease',
        category: 'Breast',
        tags: ['Benign', 'Cyclic Pain'],
        severityLevels: {
          mild: {
            symptoms: 'Bilateral breast tenderness/lumpiness worsening premenstrually, simple cysts on ultrasound, no discrete masses.',
            action: 'Supportive bra, NSAIDs, reassurance, dietary modifications'
          },
          moderate: {
            symptoms: 'Significant cyclic mastalgia, palpable cysts, nipple discharge (bilateral, non-bloody), impacts quality of life.',
            action: 'Cyst aspiration if symptomatic, hormonal therapy consideration, imaging surveillance'
          },
          severe: {
            symptoms: 'Severe pain, multiple complex cysts, atypical hyperplasia on biopsy increasing breast cancer risk.',
            action: 'Close surveillance, risk-reducing strategies, genetic counseling if strong family history'
          },
          critical: null
        },
        comorbidities: 'Caffeine intake may worsen symptoms; atypical hyperplasia on biopsy increases breast cancer risk 4-5 fold; anxiety about cancer common; dense breasts complicate screening.'
      }
    ]
  },

vulvar: {
    id: 'vulvar',
    title: 'Vulvar & Vaginal Disorders',
    icon: 'fas fa-venus',
    color: '#ce93d8',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
    description: 'Conditions affecting the vulva and vagina',
    preview: 'Intimate health conditions from lichen sclerosus to vaginismus, vulvodynia, and structural abnormalities requiring specialized care',
    exampleDiseases: ['Lichen Sclerosus', 'Vaginismus', 'Vulvodynia', 'Asherman\'s Syndrome'],
    diseases: [
      {
        name: 'Lichen Sclerosus',
        category: 'Vulvar',
        tags: ['Autoimmune', 'Chronic'],
        severityLevels: {
          mild: {
            symptoms: 'White patches on vulva, mild pruritus, slight skin changes, responsive to topical corticosteroids.',
            action: 'Topical corticosteroids, monitoring, patient education'
          },
          moderate: {
            symptoms: 'Severe pruritus, burning, architectural changes (clitoral hood fusion, labial resorption), dyspareunia, fissuring, bleeding.',
            action: 'Potent topical corticosteroids, pelvic floor therapy, sexual counseling'
          },
          severe: {
            symptoms: 'Significant scarring, complete labial fusion, vaginal stenosis, urinary/defecatory difficulties, 4-5% vulvar SCC risk.',
            action: 'Surgical intervention for severe scarring, lifelong surveillance for malignancy'
          },
          critical: null
        },
        comorbidities: 'Autoimmune diseases (thyroid, vitiligo, alopecia areata) commonly associated; postmenopausal women and prepubertal girls affected; sexual dysfunction; anxiety/depression from chronic symptoms.'
      },
      {
        name: 'Bartholin\'s Gland Cyst/Abscess',
        category: 'Vulvar',
        tags: ['Acute', 'Painful'],
        severityLevels: {
          mild: {
            symptoms: 'Asymptomatic or mildly symptomatic vulvar mass, non-tender, caused by duct obstruction.',
            action: 'Observation vs. marsupialization if large/symptomatic'
          },
          moderate: {
            symptoms: 'Abscess: acute onset severe vulvar pain, rapidly enlarging tender mass, erythema, fever, difficulty walking/sitting.',
            action: 'Incision and drainage with Word catheter or marsupialization, antibiotics'
          },
          severe: {
            symptoms: 'Large abscess with systemic signs, recurrent abscesses, rarely adenocarcinoma in women >40.',
            action: 'Surgical drainage, antibiotics, biopsy if recurrent or >40 years old'
          },
          critical: null
        },
        comorbidities: 'STIs increase abscess risk; diabetes predisposes to infection; immunosuppression increases severity; recurrence common (10-15%).'
      },
      {
        name: 'Asherman\'s Syndrome',
        category: 'Vulvar',
        tags: ['Infertility', 'Uterine'],
        severityLevels: {
          mild: {
            symptoms: 'Minimal intrauterine adhesions, hypomenorrhea, normal fertility potential with treatment.',
            action: 'Hysteroscopic adhesiolysis, estrogen therapy'
          },
          moderate: {
            symptoms: 'Moderate adhesions, oligomenorrhea or amenorrhea, cyclic pelvic pain from obstructed menstrual flow, infertility.',
            action: 'Hysteroscopic lysis, IUD placement to prevent re-adhesion, hormonal therapy'
          },
          severe: {
            symptoms: 'Extensive adhesions with cavity obliteration, complete amenorrhea, severe infertility, placental abnormalities, high miscarriage risk.',
            action: 'Multiple hysteroscopic procedures, may be irreversible, surrogacy consideration'
          },
          critical: null
        },
        comorbidities: 'Prior D&C (especially postpartum) major risk factor; endometrial TB in endemic areas; severe endometritis; prior myomectomy; emotional distress from infertility.'
      },
      {
        name: 'Vaginismus',
        category: 'Vulvar',
        tags: ['Sexual Dysfunction', 'Pain'],
        severityLevels: {
          mild: {
            symptoms: 'Involuntary vaginal muscle spasm causing discomfort during penetration, able to have intercourse with difficulty.',
            action: 'Pelvic floor therapy, vaginal dilators, cognitive behavioral therapy'
          },
          moderate: {
            symptoms: 'Significant pain preventing comfortable intercourse, moderate muscle spasm, impacts relationship.',
            action: 'Specialized pelvic floor therapy, sex therapy, gradual desensitization'
          },
          severe: {
            symptoms: 'Complete inability for vaginal penetration (intercourse, tampons, pelvic exam), severe anxiety, relationship strain.',
            action: 'Multidisciplinary approach: pelvic floor therapy, sex therapy, psychological counseling'
          },
          critical: null
        },
        comorbidities: 'Often coexists with vulvodynia; history of sexual trauma; anxiety disorders; relationship counseling beneficial.'
      },
      {
        name: 'Vulvodynia',
        category: 'Vulvar',
        tags: ['Chronic Pain', 'Sexual Dysfunction'],
        severityLevels: {
          mild: {
            symptoms: 'Intermittent vulvar burning/stinging, provoked by sexual activity or tampon use, minimal impact on daily life.',
            action: 'Topical lidocaine, pelvic floor therapy, avoid irritants'
          },
          moderate: {
            symptoms: 'Persistent vulvar pain, burning sensation, provoked or unprovoked, significantly impacts intimacy.',
            action: 'Tricyclic antidepressants, gabapentin, specialized physical therapy, sex therapy'
          },
          severe: {
            symptoms: 'Constant severe vulvar pain, unable to have intercourse, sitting difficult, severe quality of life impairment.',
            action: 'Multidisciplinary pain management, nerve blocks, vestibulectomy consideration'
          },
          critical: null
        },
        comorbidities: 'Often coexists with interstitial cystitis, IBS, fibromyalgia; depression and anxiety; relationship strain; may follow recurrent yeast infections.'
      },
      {
        name: 'Cervical Ectropion',
        category: 'Vulvar',
        tags: ['Benign', 'Physiologic'],
        severityLevels: {
          mild: {
            symptoms: 'Physiologic: columnar epithelium visible on ectocervix, common in young women and pregnancy, usually asymptomatic.',
            action: 'Reassurance, no treatment needed if asymptomatic'
          },
          moderate: {
            symptoms: 'Postcoital spotting or increased vaginal discharge, may be bothersome but benign.',
            action: 'Cryotherapy or electrocautery if symptomatic, rule out cervicitis/dysplasia first'
          },
          severe: null,
          critical: null
        },
        comorbidities: 'Estrogen-related, often resolves after pregnancy or with aging; must exclude cervicitis or dysplasia.'
      }
    ]
  },

specialized: {
    id: 'specialized',
    title: 'Specialized Conditions',
    icon: 'fas fa-microscope',
    color: '#78909c',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    description: 'Complex multi-system and specialized conditions',
    preview: 'Rare and complex conditions including OHSS from fertility treatments, female athlete triad, and polycystic kidney disease',
    exampleDiseases: ['OHSS', 'Female Athlete Triad', 'Polycystic Kidney Disease'],
    diseases: [
      {
        name: 'Ovarian Hyperstimulation Syndrome (OHSS)',
        category: 'Specialized',
        tags: ['IVF Complication', 'Emergency'],
        severityLevels: {
          mild: {
            symptoms: 'Abdominal bloating, mild nausea, enlarged ovaries (<8cm), managed outpatient.',
            action: 'Monitoring, oral hydration, pain management'
          },
          moderate: {
            symptoms: 'Ultrasound evidence of ascites, ovaries 8-12cm, nausea/vomiting, weight gain, requires close monitoring.',
            action: 'Close monitoring, possible hospitalization, IV fluids if needed'
          },
          severe: {
            symptoms: 'Large ascites, pleural effusion, ovaries >12cm, oliguria, hemoconcentration, thromboembolism risk, acute kidney injury.',
            action: 'Hospitalization, paracentesis if severe, thromboprophylaxis, careful fluid management'
          },
          critical: {
            symptoms: 'ARDS, massive ascites/effusions, ovarian torsion, thromboembolic events, renal failure.',
            action: 'ICU care, aggressive thromboprophylaxis, possible surgical intervention'
          }
        },
        comorbidities: 'PCOS increases risk; young age; high antral follicle count; pregnancy worsens severity; typically occurs 3-7 days after hCG trigger in IVF.'
      },
      {
        name: 'Female Athlete Triad',
        category: 'Specialized',
        tags: ['Athletic', 'Eating Disorder', 'Bone Health'],
        severityLevels: {
          mild: {
            symptoms: 'Low energy availability without disordered eating, subtle menstrual irregularities, optimal bone health maintained.',
            action: 'Nutritional counseling, monitoring'
          },
          moderate: {
            symptoms: 'Functional hypothalamic amenorrhea, disordered eating patterns, low bone mineral density (osteopenia), stress fractures.',
            action: 'Multidisciplinary team: nutrition, sports medicine, psychology, hormone evaluation'
          },
          severe: {
            symptoms: 'Clinical eating disorder, prolonged amenorrhea, osteoporosis, multiple stress fractures, cardiovascular complications (bradycardia).',
            action: 'Eating disorder treatment, hormonal therapy consideration, reduced training, bone protection'
          },
          critical: null
        },
        comorbidities: 'Pre-existing eating disorders amplify risk; depression/anxiety common; perfectionism; coaches emphasizing low weight; endurance sports highest risk; long-term bone health consequences.'
      },
      {
        name: 'Polycystic Kidney Disease (PCKD) in Women',
        category: 'Specialized',
        tags: ['Genetic', 'Kidney', 'Chronic'],
        severityLevels: {
          mild: {
            symptoms: 'Early stage: asymptomatic with normal renal function, few renal cysts on imaging, may have hepatic cysts.',
            action: 'BP control, genetic counseling, family screening, monitoring'
          },
          moderate: {
            symptoms: 'Declining GFR, hypertension, flank pain from cyst hemorrhage/infection, hematuria, UTIs, kidney stones.',
            action: 'BP management, pain control, treat infections, tolvaptan consideration'
          },
          severe: {
            symptoms: 'CKD stage 4-5, massive kidneys, severe hypertension, cerebral aneurysm risk, mitral valve prolapse.',
            action: 'Nephrology care, cerebral aneurysm screening (MRA), dialysis/transplant planning'
          },
          critical: {
            symptoms: 'ESRD requiring dialysis or transplantation, aneurysm rupture.',
            action: 'Dialysis, transplant evaluation, neurosurgery if aneurysm rupture'
          }
        },
        comorbidities: 'Pregnancy requires careful management due to hypertension risk; cardiovascular disease major mortality cause; hepatic cysts can be massive in women (estrogen effect); family planning counseling.'
      }
    ]
  },

mental: {
    id: 'mental',
    title: 'Mental Health Disorders',
    icon: 'fas fa-head-side-brain',
    color: '#5c6bc0',
    image: 'https://images.unsplash.com/photo-1559328610-3f1b41a25c7b?w=800&q=80',
    description: 'Psychiatric and psychological conditions with higher prevalence or distinct presentations in women',
    preview: 'Mental health conditions disproportionately affecting women, from depression and eating disorders to PTSD and bipolar disorder',
    exampleDiseases: ['Major Depression', 'Bipolar Disorder', 'Eating Disorders', 'PTSD'],
    diseases: [
      {
        name: 'Major Depressive Disorder',
        category: 'Mental Health',
        tags: ['Mood Disorder', 'Women-Predominant', 'ICD-11: 6A70'],
        severityLevels: {
          mild: {
            symptoms: 'Persistent low mood, loss of interest, mild fatigue, reduced concentration; some functional impairment but still managing responsibilities; PHQ-9 score 5-9.',
            action: 'Psychotherapy (CBT, IPT), lifestyle interventions (exercise, sleep hygiene), low-dose SSRI consideration'
          },
          moderate: {
            symptoms: 'Significant depressive symptoms affecting work, relationships, and self-care; psychomotor changes; guilt, worthlessness; PHQ-9 score 10-14.',
            action: 'SSRI/SNRI pharmacotherapy, structured psychotherapy, regular follow-up'
          },
          severe: {
            symptoms: 'Pervasive depression with anhedonia, inability to function, vegetative symptoms, possible psychotic features; PHQ-9 score 15-27.',
            action: 'Combination pharmacotherapy + intensive psychotherapy; hospitalization if safety concerns; ECT for refractory severe depression'
          },
          critical: {
            symptoms: 'Active suicidal ideation with intent or plan, psychotic depression, complete inability to self-care, medical compromise from malnutrition.',
            action: 'Emergency psychiatric assessment, hospitalization, intensive monitoring, ECT; 24h crisis line support'
          }
        },
        comorbidities: 'Women have 2x lifetime risk vs men; PMDD increases risk; perinatal depression peaks postpartum; menopause transition is a high-risk period; anxiety disorders co-occur in 50%; chronic pain and cardiac disease bidirectionally linked.'
      },
      {
        name: 'Bipolar Disorder',
        category: 'Mental Health',
        tags: ['Mood Disorder', 'Cyclical', 'Lifetime Management', 'ICD-11: 6A60'],
        severityLevels: {
          mild: {
            symptoms: 'Bipolar II (hypomania + depression): elevated mood, increased energy, decreased sleep need — not causing marked impairment; more depressive burden in women.',
            action: 'Mood stabilizer (lithium, lamotrigine), psychoeducation, sleep schedule regulation'
          },
          moderate: {
            symptoms: 'Bipolar I: full manic episodes (grandiosity, pressured speech, reckless behavior) alternating with severe depression, moderate functional impairment.',
            action: 'Mood stabilizer + atypical antipsychotic, structured psychotherapy; avoid antidepressant monotherapy'
          },
          severe: {
            symptoms: 'Severe mania with psychotic features (delusions, hallucinations), aggressive behavior, marked functional impairment, unable to care for self.',
            action: 'Hospitalization, antipsychotics, mood stabilizers, benzodiazepines for agitation; safety planning'
          },
          critical: {
            symptoms: 'Mixed dysphoric mania with suicidal ideation (highest suicide risk state), postpartum bipolar episode progressing to psychosis.',
            action: 'Emergency hospitalization, ECT for mixed state with suicidality; rapid intervention for postpartum psychosis to ensure maternal and infant safety'
          }
        },
        comorbidities: 'Women have more depressive cycles and rapid cycling; anxiety disorders in 50%; ADHD underdiagnosed; valproate teratogenic (avoid in women of childbearing age); OCP can destabilize mood.'
      },
      {
        name: 'Eating Disorders (Anorexia & Bulimia)',
        category: 'Mental Health',
        tags: ['Eating Disorder', 'Women-Predominant', 'Serious', 'ICD-11: 6B80'],
        severityLevels: {
          mild: {
            symptoms: 'Sub-threshold disordered eating: restrictive eating without medical compromise, infrequent purging (<1x/week), body image concerns.',
            action: 'Early psychotherapy (CBT-E), nutritional counseling, body image work, regular monitoring'
          },
          moderate: {
            symptoms: 'Moderate anorexia (BMI 15-17.5): significant food restriction, excessive exercise, amenorrhea, bradycardia; moderate bulimia: 1-3 purge episodes per day, electrolyte imbalances.',
            action: 'Intensive outpatient or partial hospitalization, nutritional rehabilitation, family-based therapy for adolescents'
          },
          severe: {
            symptoms: 'Severe anorexia (BMI <15): cardiac arrhythmia from electrolyte disturbances, bone marrow failure, renal failure, severe osteoporosis, lanugo hair.',
            action: 'Inpatient medical stabilization, nasogastric feeding if refusing, structured meal support, cardiac monitoring; refeeding syndrome prevention'
          },
          critical: {
            symptoms: 'Life-threatening AN: BMI <13, cardiac arrhythmias, QTc prolongation, severe electrolyte derangements, respiratory compromise, organ failure.',
            action: 'ICU management, careful refeeding (phosphate supplementation), ECG monitoring, nasogastric/parenteral nutrition'
          }
        },
        comorbidities: 'Highest mortality of any psychiatric disorder; PTSD and sexual trauma are risk factors; OCD and perfectionism common; depression and anxiety co-occur; osteoporosis from amenorrhea; infertility; pregnancy is high-risk period.'
      },
      {
        name: 'Post-Traumatic Stress Disorder (PTSD)',
        category: 'Mental Health',
        tags: ['Trauma', 'Women-Predominant', 'Anxiety', 'ICD-11: 6B40'],
        severityLevels: {
          mild: {
            symptoms: 'Mild PTSD: intrusive memories, avoidance of trauma reminders, mild hypervigilance; some functional impairment but maintaining relationships and work.',
            action: 'Trauma-focused CBT, EMDR, peer support'
          },
          moderate: {
            symptoms: 'Significant PTSD: frequent nightmares, flashbacks, emotional numbing, hyperarousal, anger, relationship difficulties, impaired work performance.',
            action: 'Trauma-focused psychotherapy (Prolonged Exposure, CPT), SSRI/SNRI pharmacotherapy, sleep management'
          },
          severe: {
            symptoms: 'Complex PTSD: affect dysregulation, dissociative episodes, persistent negative self-concept from chronic trauma, severe interpersonal difficulties.',
            action: 'Phase-based trauma therapy, dialectical behavior therapy (DBT), intensive outpatient programs'
          },
          critical: {
            symptoms: 'Severe PTSD with acute dissociation, flashback-induced self-harm, suicidal crisis, concurrent domestic violence situation.',
            action: 'Crisis intervention, safety planning, trauma-informed hospitalization if needed, domestic violence services'
          }
        },
        comorbidities: 'Women have 2x lifetime PTSD risk vs men; sexual violence most common precipitant in women; depression co-occurs in >50%; substance use disorder in 30-50%; chronic pain and GI disorders frequently co-present.'
      }
    ]
  },

gastrointestinal: {
    id: 'gastrointestinal',
    title: 'Gastrointestinal Disorders',
    icon: 'fas fa-stomach',
    color: '#26a69a',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
    description: 'Digestive system conditions with specific relevance to women',
    preview: 'GI conditions from IBS and IBD to GERD and celiac disease, many of which disproportionately affect women',
    exampleDiseases: ['IBS', 'IBD (Crohn\'s/UC)', 'GERD', 'Celiac Disease'],
    diseases: [
      {
        name: 'Irritable Bowel Syndrome (IBS)',
        category: 'Gastrointestinal',
        tags: ['Functional GI', 'Women-Predominant', 'Chronic', 'ICD-11: DD90'],
        severityLevels: {
          mild: {
            symptoms: 'Intermittent abdominal pain relieved by defecation, altered bowel habits (constipation, diarrhea, or mixed), bloating; minimal quality of life impact.',
            action: 'Dietary modifications (low-FODMAP diet), fiber supplementation, stress management, reassurance'
          },
          moderate: {
            symptoms: 'Frequent abdominal cramping, significant bloating, unpredictable bowel habits affecting daily activities and social life, food avoidance.',
            action: 'Antispasmodics, loperamide for IBS-D or laxatives for IBS-C, low-dose antidepressants, gut-directed hypnotherapy, CBT'
          },
          severe: {
            symptoms: 'Severe pain, significant food restriction, major functional impairment, multiple food intolerances, weight loss, severe psychological distress, frequent healthcare visits.',
            action: 'Rifaximin for IBS-D, linaclotide/lubiprostone for IBS-C, intensive psychotherapy, gastroenterology referral'
          },
          critical: null
        },
        comorbidities: 'Fibromyalgia, interstitial cystitis, chronic fatigue syndrome overlap; anxiety and depression bidirectional; dysmenorrhea worsens IBS perimenstrually; endometriosis mimics IBS.'
      },
      {
        name: 'Inflammatory Bowel Disease (IBD)',
        category: 'Gastrointestinal',
        tags: ['Autoimmune', 'Chronic', 'Crohn\'s & UC', 'ICD-11: DD70'],
        severityLevels: {
          mild: {
            symptoms: 'Mild Crohn\'s or UC: fewer than 4 stools per day, no systemic symptoms, normal inflammatory markers, responds to aminosalicylates or topical therapy.',
            action: 'Mesalamine for UC, budesonide for Crohn\'s, dietary support, smoking cessation in Crohn\'s'
          },
          moderate: {
            symptoms: '4-6 bloody stools per day (UC) or moderate abdominal pain, weight loss, mild anemia, elevated CRP, extraintestinal manifestations (arthritis, uveitis, erythema nodosum).',
            action: 'Corticosteroids for induction, immunomodulators (azathioprine), biologics (anti-TNF agents), colonoscopy for monitoring'
          },
          severe: {
            symptoms: 'More than 6 stools per day, significant rectal bleeding, fever, tachycardia, anemia, severe abdominal pain, weight loss, hypoalbuminemia; toxic megacolon risk.',
            action: 'Hospitalization, IV corticosteroids, biologics (infliximab, vedolizumab, ustekinumab); surgical evaluation'
          },
          critical: {
            symptoms: 'Toxic megacolon (UC): fever, tachycardia, abdominal distension, leukocytosis, impending perforation; severe Crohn\'s with fistulae and bowel obstruction.',
            action: 'ICU care, IV steroids, urgent colectomy for toxic megacolon, surgical drainage for abscesses'
          }
        },
        comorbidities: 'Pregnancy planning essential (IBD flares increase miscarriage risk); methotrexate contraindicated in pregnancy; anemia common; colorectal cancer risk after 8-10 years; osteoporosis from steroids; mental health disorders very common.'
      },
      {
        name: 'Gastroesophageal Reflux Disease (GERD)',
        category: 'Gastrointestinal',
        tags: ['Acid Reflux', 'Common', 'Chronic', 'ICD-11: DA22'],
        severityLevels: {
          mild: {
            symptoms: 'Occasional heartburn (fewer than 2x/week), mild regurgitation, responsive to antacids and lifestyle changes, no alarm symptoms.',
            action: 'Lifestyle changes (head of bed elevation, weight loss, avoid triggers), antacids or H2 blockers as needed'
          },
          moderate: {
            symptoms: 'Frequent heartburn (2+ times/week) or regurgitation, sleep disturbance, possible non-cardiac chest pain, atypical symptoms (chronic cough, hoarseness, asthma-like); worsens in pregnancy.',
            action: 'Daily PPI therapy, lifestyle modifications; upper endoscopy if needed'
          },
          severe: {
            symptoms: 'Severe refractory GERD on PPI; erosive esophagitis; Barrett\'s esophagus; dysphagia suggesting stricture; extraesophageal complications.',
            action: 'High-dose PPI, anti-reflux surgery (fundoplication), endoscopic procedures; Barrett\'s surveillance for adenocarcinoma'
          },
          critical: {
            symptoms: 'Barrett\'s with high-grade dysplasia, esophageal adenocarcinoma, esophageal stricture causing inability to swallow, significant weight loss.',
            action: 'Endoscopic mucosal resection, esophagectomy for cancer, dilation for stricture, oncology referral'
          }
        },
        comorbidities: 'Obesity major risk factor; pregnancy causes/worsens GERD in all trimesters; hiatal hernia associated; asthma can be triggered or worsened; Barrett\'s esophagus in 10-15% with chronic GERD.'
      },
      {
        name: 'Celiac Disease',
        category: 'Gastrointestinal',
        tags: ['Autoimmune', 'Gluten', 'Women-Predominant', 'ICD-11: DA96'],
        severityLevels: {
          mild: {
            symptoms: 'Subclinical celiac: fatigue, iron-deficiency anemia, mild bloating, elevated liver enzymes, dermatitis herpetiformis; positive serology only.',
            action: 'Strict lifelong gluten-free diet; nutritional supplementation (iron, folate, B12, vitamin D, calcium)'
          },
          moderate: {
            symptoms: 'Classical malabsorption: chronic diarrhea, steatorrhea, significant bloating, weight loss, multiple nutritional deficiencies, short stature in adolescents.',
            action: 'Gluten-free diet, dietitian support, treat nutritional deficiencies, DEXA scan for bone density, annual follow-up'
          },
          severe: {
            symptoms: 'Severe malabsorption with malnutrition, severe osteoporosis, infertility, recurrent pregnancy loss, peripheral neuropathy.',
            action: 'Strict GFD compliance verification, nutritional rehabilitation, bone protection, fertility evaluation'
          },
          critical: {
            symptoms: 'Refractory celiac disease type II: severe villous atrophy despite strict GFD, risk of enteropathy-associated T-cell lymphoma, severe malnutrition.',
            action: 'Immunosuppressive therapy (budesonide, azathioprine), parenteral nutrition, lymphoma surveillance, oncology referral'
          }
        },
        comorbidities: 'Type 1 diabetes co-occurs in 5-10%; thyroid disorders; Turner syndrome; Down syndrome; other autoimmune diseases; infertility and recurrent miscarriage; women have 2x risk vs men; depression and anxiety common.'
      }
    ]
  },

dermatological: {
    id: 'dermatological',
    title: 'Dermatological Disorders',
    icon: 'fas fa-allergies',
    color: '#ef6c00',
    image: 'https://images.unsplash.com/photo-1609840113882-34b5c39c7b01?w=800&q=80',
    description: 'Skin conditions with specific relevance or higher prevalence in women',
    preview: 'Skin conditions from hormonal acne and melasma to psoriasis and chronic urticaria, many with hormonal influences in women',
    exampleDiseases: ['Hormonal Acne', 'Melasma', 'Psoriasis', 'Chronic Urticaria'],
    diseases: [
      {
        name: 'Acne Vulgaris (Hormonal)',
        category: 'Dermatological',
        tags: ['Hormonal', 'Common', 'Women-Specific', 'ICD-11: EA80'],
        severityLevels: {
          mild: {
            symptoms: 'Comedonal acne (blackheads, whiteheads), few papules; perimenstrual flares; responds to topical therapy; minimal scarring.',
            action: 'Topical retinoids, benzoyl peroxide, salicylic acid; gentle skincare; avoid pore-clogging products'
          },
          moderate: {
            symptoms: 'Moderate inflammatory acne: papules and pustules on face and trunk, postinflammatory hyperpigmentation; perimenstrual worsening significant.',
            action: 'Topical antibiotics + retinoids; consider OCP or spironolactone for hormonal acne; oral antibiotics short-term'
          },
          severe: {
            symptoms: 'Severe nodular or cystic acne: painful nodules and cysts, significant risk of permanent scarring, severe psychosocial distress, resistant to multiple treatments.',
            action: 'Oral isotretinoin (requires contraception in women — iPLEDGE program); spironolactone; hormonal therapy; dermatology referral'
          },
          critical: {
            symptoms: 'Acne fulminans: explosive widespread ulcerating nodulocystic acne with systemic features (fever, joint pain, elevated ESR), rare.',
            action: 'Systemic corticosteroids first, then isotretinoin; hospitalization may be required'
          }
        },
        comorbidities: 'PCOS major cause of hormonal acne in women; stress amplifies breakouts; depression and anxiety from acne; scarring causes long-term psychosocial impact; isotretinoin requires strict contraception due to teratogenicity.'
      },
      {
        name: 'Melasma',
        category: 'Dermatological',
        tags: ['Pigmentation', 'Hormonal', 'Women-Predominant', 'ICD-11: ED61'],
        severityLevels: {
          mild: {
            symptoms: 'Mild brown patches on sun-exposed areas (face, forehead, cheeks), often worsening with OCP or pregnancy (chloasma — mask of pregnancy).',
            action: 'Broad-spectrum SPF 50+ sunscreen daily, gentle skin care, sun avoidance'
          },
          moderate: {
            symptoms: 'Moderate to extensive hyperpigmentation affecting self-esteem, worsening with sun exposure, not resolving after pregnancy/OCP cessation.',
            action: 'Topical depigmenting agents (hydroquinone, kojic acid, tranexamic acid, azelaic acid), chemical peels, strict photoprotection'
          },
          severe: {
            symptoms: 'Refractory widespread melasma resistant to topical therapies, significant quality of life impact, complex mixed epidermal-dermal pigmentation.',
            action: 'Laser therapy (Q-switched Nd:YAG, fractional laser), combination depigmenting agents; dermatology referral'
          },
          critical: null
        },
        comorbidities: 'OCP use major trigger; pregnancy causes mask of pregnancy; thyroid disorders associated; UV radiation key aggravating factor; psychosocial impact including depression; difficult to treat in darker skin tones.'
      },
      {
        name: 'Psoriasis',
        category: 'Dermatological',
        tags: ['Autoimmune', 'Chronic', 'Systemic', 'ICD-11: EA90'],
        severityLevels: {
          mild: {
            symptoms: 'BSA <3%: limited plaque psoriasis on elbows, knees, scalp with erythematous plaques with silvery scales; modest quality of life impact.',
            action: 'Topical corticosteroids, vitamin D analogues, emollients, targeted phototherapy'
          },
          moderate: {
            symptoms: 'BSA 3-10%: more extensive involvement, significant pruritus, visible plaques causing social embarrassment, quality of life impact (DLQI >10).',
            action: 'Topical therapy + narrowband UVB phototherapy; consider systemic therapy if inadequate response'
          },
          severe: {
            symptoms: 'BSA >10% or special sites (hands, feet, nails, genitalia); psoriatic arthritis in 30%; erythrodermic or pustular variants; significant functional impact.',
            action: 'Systemic biologics (IL-17, IL-23, TNF inhibitors), methotrexate, acitretin; dermatology/rheumatology co-management'
          },
          critical: {
            symptoms: 'Erythrodermic psoriasis (>90% BSA): thermoregulation failure, protein loss; pustular psoriasis of pregnancy (impetigo herpetiformis): maternal and fetal risk.',
            action: 'Hospitalization, IV fluids, temperature regulation; biologics or steroids; obstetric monitoring and early delivery consideration'
          }
        },
        comorbidities: 'Psoriatic arthritis in 30%; metabolic syndrome and cardiovascular disease increased risk; IBD association; depression and anxiety common; hormonal fluctuations affect severity; smoking and alcohol worsen course.'
      },
      {
        name: 'Chronic Urticaria & Angioedema',
        category: 'Dermatological',
        tags: ['Allergic', 'Chronic', 'Women-Predominant', 'ICD-11: EB01'],
        severityLevels: {
          mild: {
            symptoms: 'Episodic urticarial wheals with mild pruritus, episodes lasting less than 6 weeks (acute) or persisting more than 6 weeks (chronic spontaneous urticaria), manageable with antihistamines.',
            action: 'Non-sedating antihistamines (cetirizine, loratadine), avoid known triggers, allergen testing'
          },
          moderate: {
            symptoms: 'Daily or frequent urticarial episodes significantly impacting sleep and quality of life, inadequate response to standard antihistamines, associated angioedema.',
            action: 'High-dose antihistamines (4x standard dose), add H2 blocker, short-course steroids for flares; omalizumab for refractory CSU'
          },
          severe: {
            symptoms: 'Refractory chronic urticaria with angioedema; hereditary angioedema (HAE): recurrent attacks of skin, GI, or upper airway swelling — attacks increase with OCP/hormones.',
            action: 'Omalizumab; HAE: icatibant, C1-esterase inhibitor concentrate; avoid estrogen-containing OCPs in HAE'
          },
          critical: {
            symptoms: 'Laryngeal angioedema: rapidly progressive throat swelling, stridor, respiratory failure — can be fatal without immediate treatment.',
            action: 'Emergency epinephrine (anaphylaxis), icatibant or C1-INH for HAE; airway management; emergency tracheotomy if severe'
          }
        },
        comorbidities: 'Thyroid autoimmunity in 30% of chronic spontaneous urticaria; lupus associated; pregnancy may improve or worsen; OCP can trigger HAE attacks; stress is a trigger; menstrual cycle affects frequency.'
      }
    ]
  },

hematological: {
    id: 'hematological',
    title: 'Hematological Disorders',
    icon: 'fas fa-droplet',
    color: '#c62828',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    description: 'Blood and bone marrow conditions with specific relevance to women',
    preview: 'Blood disorders including iron deficiency anemia, thrombocytopenia, inherited coagulation disorders, and sickle cell disease in women',
    exampleDiseases: ['Iron Deficiency Anemia', 'ITP', 'Von Willebrand Disease', 'Sickle Cell Disease'],
    diseases: [
      {
        name: 'Iron Deficiency Anemia (IDA)',
        category: 'Hematological',
        tags: ['Common', 'Women-Predominant', 'Nutritional', 'ICD-11: 3A00.0'],
        severityLevels: {
          mild: {
            symptoms: 'Mild fatigue, pallor, mild exertional dyspnea; Hgb 10-12 g/dL; serum ferritin <15, reduced transferrin saturation; common with heavy menstrual bleeding.',
            action: 'Oral iron supplementation, treat underlying cause (heavy menses, dietary deficiency); dietary counseling'
          },
          moderate: {
            symptoms: 'Significant fatigue, headaches, cold intolerance, pica (craving ice, clay), tachycardia on exertion, restless leg syndrome; Hgb 8-10 g/dL.',
            action: 'Higher-dose oral iron, switch to IV iron if poor absorption, evaluate for bleeding source; treat underlying cause'
          },
          severe: {
            symptoms: 'Severe anemia (Hgb <8 g/dL): dyspnea at rest, palpitations, cognitive impairment, inability to work; koilonychia, angular cheilitis, glossitis.',
            action: 'IV iron sucrose or ferric carboxymaltose; evaluate for malignancy or malabsorption; transfusion if symptomatic'
          },
          critical: {
            symptoms: 'Hemodynamically significant anemia (Hgb <7 g/dL): chest pain, high-output cardiac failure; in pregnancy: fetal hypoxia, preterm birth risk.',
            action: 'Blood transfusion, treat underlying cause urgently; obstetric emergencies may require perioperative management'
          }
        },
        comorbidities: 'Heavy menstrual bleeding is most common cause in premenopausal women; pregnancy increases iron demand; celiac disease and IBD cause malabsorption; NSAID use causes GI blood loss; hypothyroidism associated.'
      },
      {
        name: 'Immune Thrombocytopenia (ITP)',
        category: 'Hematological',
        tags: ['Platelet Disorder', 'Autoimmune', 'Women-Predominant', 'ICD-11: 3B64'],
        severityLevels: {
          mild: {
            symptoms: 'Mild thrombocytopenia (platelets 50-100k): asymptomatic or minor easy bruising, petechiae; gestational thrombocytopenia in pregnancy (benign, platelets typically >70k).',
            action: 'Observation for mild ITP; reassurance for gestational thrombocytopenia; avoid aspirin/NSAIDs'
          },
          moderate: {
            symptoms: 'Platelets 20-50k: mucocutaneous bleeding (epistaxis, gum bleeding, menorrhagia), easy bruising, petechiae/purpura, significant menstrual blood loss.',
            action: 'Corticosteroids (prednisone) first-line; IVIG for rapid platelet elevation; thrombopoietin receptor agonists for chronic ITP'
          },
          severe: {
            symptoms: 'Platelets <20k: clinically significant bleeding (GI bleed, hematuria, prolonged menorrhagia); severe menorrhagia causing anemia.',
            action: 'IVIG + corticosteroids; rituximab for refractory; splenectomy (second-line); platelet transfusion only for life-threatening bleeding'
          },
          critical: {
            symptoms: 'Intracranial hemorrhage or life-threatening internal bleeding; neonatal thrombocytopenia from maternal ITP antibody transfer.',
            action: 'Emergency IVIG + steroids, platelet transfusion, neurosurgery if ICH; neonatal monitoring and IVIg for severely affected neonates'
          }
        },
        comorbidities: 'SLE causes secondary ITP (more refractory); APS coexists; pregnancy with ITP requires careful management (neonatal thrombocytopenia risk, avoid epidural if platelets <80k); H. pylori eradication can improve ITP.'
      },
      {
        name: 'Von Willebrand Disease (VWD)',
        category: 'Hematological',
        tags: ['Bleeding Disorder', 'Inherited', 'Underdiagnosed in Women', 'ICD-11: 3B20'],
        severityLevels: {
          mild: {
            symptoms: 'Type 1 VWD (60-80%): mild mucocutaneous bleeding, heavy menstrual bleeding (>80 mL/cycle), easy bruising; often diagnosed after dental/surgical bleeding.',
            action: 'Desmopressin (DDAVP) for minor procedures, antifibrinolytics (tranexamic acid) for menorrhagia, hormone therapy'
          },
          moderate: {
            symptoms: 'Type 1 severe or Type 2 VWD: significant menorrhagia causing iron deficiency, bleeding after procedures, postpartum hemorrhage risk.',
            action: 'VWF concentrate for procedures; close obstetric planning with hematology; tranexamic acid long-term for menorrhagia'
          },
          severe: {
            symptoms: 'Type 3 VWD: severe deficiency, both mucocutaneous and joint/muscle bleeding, heavy menorrhagia causing severe anemia, frequent bleeding episodes.',
            action: 'VWF concentrate replacement therapy, individualized bleeding management plan, hematology specialist care'
          },
          critical: {
            symptoms: 'Postpartum hemorrhage in VWD: VWF rises in pregnancy then drops sharply postpartum — major risk; life-threatening hemorrhage if unmanaged.',
            action: 'Hematology and obstetric co-management; VWF concentrate prophylaxis peripartum; platelet transfusion; avoid neuraxial anesthesia without adequate VWF levels'
          }
        },
        comorbidities: 'Most underdiagnosed in women because heavy menstruation attributed to gynecologic causes; often diagnosed after unnecessary hysterectomy; iron deficiency anemia universal; hypothyroidism can lower VWF levels; OCP raises VWF and treats menorrhagia.'
      },
      {
        name: 'Sickle Cell Disease in Women',
        category: 'Hematological',
        tags: ['Inherited', 'Hemoglobinopathy', 'Chronic', 'ICD-11: 3A51'],
        severityLevels: {
          mild: {
            symptoms: 'Mild SCD or HbSC: infrequent pain crises, less severe anemia (Hgb 9-11 g/dL), manageable with oral medications, employed and functional.',
            action: 'Hydroxyurea, folic acid, pain management, regular blood counts and organ function monitoring, vaccinations'
          },
          moderate: {
            symptoms: 'Moderate SCA (HbSS): frequent pain crises requiring ED visits, chronic pain, osteonecrosis, retinopathy screening required, renal dysfunction beginning.',
            action: 'Hydroxyurea optimization, L-glutamine, crizanlizumab for vaso-occlusive crises; iron chelation if transfusion-dependent'
          },
          severe: {
            symptoms: 'Severe SCA: frequent hospitalizations, acute chest syndrome, stroke risk, pulmonary hypertension, sickle nephropathy, avascular necrosis, leg ulcers.',
            action: 'Chronic transfusion therapy, hydroxyurea, hematology specialist, multidisciplinary care, bone marrow transplant evaluation'
          },
          critical: {
            symptoms: 'Acute chest syndrome (fever, chest pain, respiratory failure) — leading cause of death; splenic sequestration; stroke; multi-organ failure; pregnancy is very high-risk.',
            action: 'Exchange transfusion for severe acute chest syndrome/stroke; ICU; supplemental oxygen; high-risk obstetric management in pregnancy'
          }
        },
        comorbidities: 'Pregnancy is highest-risk period; avascular necrosis of femoral head in 50%; chronic kidney disease; pulmonary hypertension; retinopathy; stroke; depression from chronic pain; iron overload from transfusions; contraception counseling important.'
      }
    ]
  }
};

export { diseaseDatabase };
export default diseaseDatabase;
