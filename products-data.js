// Clarix Peptides — shared product catalogue data
const PRODUCTS = [
  {id:1,  name:"Retatrutide",       strength:"10mg",  price:55.00, img:"brand_assets/Retatrutide_10mg.png",     slug:"retatrutide-10mg",   badge:"Bestseller",
   desc:"Tri-receptor GIP/GLP-1/glucagon agonist for advanced metabolic research.",
   descFull:"Retatrutide is a novel tri-agonist research peptide that simultaneously targets the GIP (glucose-dependent insulinotropic polypeptide), GLP-1 (glucagon-like peptide-1), and glucagon receptors. This unique triple-receptor activity offers researchers unparalleled insight into multi-pathway metabolic signalling, energy expenditure regulation, adipose tissue biology, and glucose homeostasis. Widely studied as one of the most potent investigational metabolic compounds currently available. Supplied as a pharmaceutical-grade lyophilised powder for in-vitro laboratory research use only.",
   molecularFormula:"Proprietary peptide sequence — data sheet available on request",
   batchNumber:"CX-RET-10-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:2,  name:"Retatrutide",       strength:"20mg",  price:99.00, img:"brand_assets/Retatrutide_20mg.png",     slug:"retatrutide-20mg",   badge:null,
   desc:"Tri-receptor GIP/GLP-1/glucagon agonist for advanced metabolic research.",
   descFull:"Retatrutide is a novel tri-agonist research peptide that simultaneously targets the GIP (glucose-dependent insulinotropic polypeptide), GLP-1 (glucagon-like peptide-1), and glucagon receptors. This unique triple-receptor activity offers researchers unparalleled insight into multi-pathway metabolic signalling, energy expenditure regulation, adipose tissue biology, and glucose homeostasis. Widely studied as one of the most potent investigational metabolic compounds currently available. Supplied as a pharmaceutical-grade lyophilised powder for in-vitro laboratory research use only.",
   molecularFormula:"Proprietary peptide sequence — data sheet available on request",
   batchNumber:"CX-RET-20-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:3,  name:"Tirzepatide",       strength:"10mg",  price:42.00, img:"brand_assets/Tirzepatide_10mg.png",     slug:"tirzepatide-10mg",   badge:null,
   desc:"Dual GIP and GLP-1 receptor agonist; powerful metabolic research compound.",
   descFull:"Tirzepatide is a dual GIP/GLP-1 receptor co-agonist studied for its synergistic effects on incretin hormone signalling pathways. Its simultaneous activation of both the GIP and GLP-1 receptors provides a research model for studying insulin secretion dynamics, glucagon suppression, gastric emptying delay, and adipose tissue metabolism. A widely referenced compound in pre-clinical metabolic research.",
   molecularFormula:"C₂₂₅H₃₄₈N₄₈O₆₈",
   batchNumber:"CX-TIR-10-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:4,  name:"Tirzepatide",       strength:"20mg",  price:85.00, img:"brand_assets/Tirzepatide_20mg.png",     slug:"tirzepatide-20mg",   badge:null,
   desc:"Dual GIP and GLP-1 receptor agonist; powerful metabolic research compound.",
   descFull:"Tirzepatide is a dual GIP/GLP-1 receptor co-agonist studied for its synergistic effects on incretin hormone signalling pathways. Its simultaneous activation of both the GIP and GLP-1 receptors provides a research model for studying insulin secretion dynamics, glucagon suppression, gastric emptying delay, and adipose tissue metabolism. A widely referenced compound in pre-clinical metabolic research.",
   molecularFormula:"C₂₂₅H₃₄₈N₄₈O₆₈",
   batchNumber:"CX-TIR-20-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:5,  name:"Semaglutide",       strength:"5mg",   price:35.00, img:"brand_assets/Semaglutide_5mg.png",      slug:"semaglutide-5mg",    badge:null,
   desc:"GLP-1 receptor agonist widely studied for metabolic and appetite research.",
   descFull:"Semaglutide is a GLP-1 receptor agonist with a C18 fatty acid side chain modification that enables extended half-life via reversible albumin binding. It is one of the most extensively published GLP-1 analogues in metabolic research, used in studies exploring satiety signalling, insulin secretion dynamics, glucagon suppression, and long-term metabolic regulation in laboratory models.",
   molecularFormula:"C₁₈₇H₂₉₁N₄₅O₅₉",
   batchNumber:"CX-SEM-5-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:6,  name:"Semaglutide",       strength:"10mg",  price:52.00, img:"brand_assets/Semaglutide_10mg.png",     slug:"semaglutide-10mg",   badge:null,
   desc:"GLP-1 receptor agonist widely studied for metabolic and appetite research.",
   descFull:"Semaglutide is a GLP-1 receptor agonist with a C18 fatty acid side chain modification that enables extended half-life via reversible albumin binding. It is one of the most extensively published GLP-1 analogues in metabolic research, used in studies exploring satiety signalling, insulin secretion dynamics, glucagon suppression, and long-term metabolic regulation in laboratory models.",
   molecularFormula:"C₁₈₇H₂₉₁N₄₅O₅₉",
   batchNumber:"CX-SEM-10-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:7,  name:"Tesamorelin",       strength:"2mg",   price:36.00, img:"brand_assets/Tesamorelin_2mg.png",      slug:"tesamorelin-2mg",    badge:null,
   desc:"Synthetic GHRH analogue; studied for adipose tissue and GH secretion research.",
   descFull:"Tesamorelin is a synthetic analogue of growth hormone–releasing hormone (GHRH) comprising the full 44-amino acid GHRH sequence with a trans-3-hexenoic acid modification at the N-terminus to improve stability. It selectively stimulates GH secretion from anterior pituitary somatotrophs without affecting other pituitary hormones, making it a precise tool for GH-axis and visceral adipose tissue research.",
   molecularFormula:"C₂₂₁H₃₆₂N₆₆O₅₈S",
   batchNumber:"CX-TES-2-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:8,  name:"Tesamorelin",       strength:"5mg",   price:52.00, img:"brand_assets/Tesamorelin_5mg.png",      slug:"tesamorelin-5mg",    badge:null,
   desc:"Synthetic GHRH analogue; studied for adipose tissue and GH secretion research.",
   descFull:"Tesamorelin is a synthetic analogue of growth hormone–releasing hormone (GHRH) comprising the full 44-amino acid GHRH sequence with a trans-3-hexenoic acid modification at the N-terminus to improve stability. It selectively stimulates GH secretion from anterior pituitary somatotrophs without affecting other pituitary hormones, making it a precise tool for GH-axis and visceral adipose tissue research.",
   molecularFormula:"C₂₂₁H₃₆₂N₆₆O₅₈S",
   batchNumber:"CX-TES-5-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:9,  name:"CJC-1295 (No DAC)", strength:"2mg",   price:22.00, img:"brand_assets/CJC-1295_no_DAC_2mg.png", slug:"cjc-1295-2mg",       badge:null,
   desc:"GHRH analogue with short half-life; used in pulsatile GH secretion studies.",
   descFull:"CJC-1295 (No DAC) — also referred to as Modified GRF 1–29 — is a truncated, stabilised analogue of the first 29 amino acids of GHRH. Unlike its DAC-containing counterpart, this version retains a physiologically short half-life, making it the preferred compound for studying pulsatile growth hormone release patterns and somatotroph receptor dynamics under controlled laboratory conditions.",
   molecularFormula:"C₁₅₂H₂₅₂N₄₄O₄₂",
   batchNumber:"CX-CJC-2-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:10, name:"CJC-1295 (No DAC)", strength:"5mg",   price:36.00, img:"brand_assets/CJC-1295_no_DAC_5mg.png", slug:"cjc-1295-5mg",       badge:null,
   desc:"GHRH analogue with short half-life; used in pulsatile GH secretion studies.",
   descFull:"CJC-1295 (No DAC) — also referred to as Modified GRF 1–29 — is a truncated, stabilised analogue of the first 29 amino acids of GHRH. Unlike its DAC-containing counterpart, this version retains a physiologically short half-life, making it the preferred compound for studying pulsatile growth hormone release patterns and somatotroph receptor dynamics under controlled laboratory conditions.",
   molecularFormula:"C₁₅₂H₂₅₂N₄₄O₄₂",
   batchNumber:"CX-CJC-5-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:11, name:"Ipamorelin",        strength:"2mg",   price:14.00, img:"brand_assets/Ipamorelin_2mg.png",       slug:"ipamorelin-2mg",     badge:null,
   desc:"Selective GH secretagogue with high specificity; minimal off-target effects.",
   descFull:"Ipamorelin is a selective ghrelin receptor agonist and growth hormone secretagogue characterised by its high receptor specificity and minimal off-target hormonal effects. Unlike many GH secretagogues, Ipamorelin does not significantly elevate cortisol, ACTH, or prolactin levels at research doses, making it a precise tool for studying isolated GH pulse dynamics and somatotroph sensitivity.",
   molecularFormula:"C₃₈H₄₉N₉O₅",
   batchNumber:"CX-IPA-2-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:12, name:"Ipamorelin",        strength:"5mg",   price:22.00, img:"brand_assets/Ipamorelin_5mg.png",       slug:"ipamorelin-5mg",     badge:null,
   desc:"Selective GH secretagogue with high specificity; minimal off-target effects.",
   descFull:"Ipamorelin is a selective ghrelin receptor agonist and growth hormone secretagogue characterised by its high receptor specificity and minimal off-target hormonal effects. Unlike many GH secretagogues, Ipamorelin does not significantly elevate cortisol, ACTH, or prolactin levels at research doses, making it a precise tool for studying isolated GH pulse dynamics and somatotroph sensitivity.",
   molecularFormula:"C₃₈H₄₉N₉O₅",
   batchNumber:"CX-IPA-5-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:13, name:"GHK-Cu",            strength:"50mg",  price:28.00, img:"brand_assets/GHK-Cu_50mg.png",          slug:"ghk-cu-50mg",        badge:null,
   desc:"Copper-binding tripeptide researched for tissue remodelling and cellular signalling.",
   descFull:"GHK-Cu is a naturally occurring copper(II) complex of the tripeptide Gly-His-Lys. Studies have investigated its role in fibroblast proliferation, extracellular matrix remodelling, collagen and elastin synthesis regulation, and antioxidant pathway activation. It is a key research compound in tissue biology, wound healing research, and cellular signalling studies.",
   molecularFormula:"C₁₄H₂₂CuN₆O₄",
   batchNumber:"CX-GHK-50-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:14, name:"GHK-Cu",            strength:"100mg", price:42.00, img:"brand_assets/GHK-Cu_100mg.png",         slug:"ghk-cu-100mg",       badge:null,
   desc:"Copper-binding tripeptide researched for tissue remodelling and cellular signalling.",
   descFull:"GHK-Cu is a naturally occurring copper(II) complex of the tripeptide Gly-His-Lys. Studies have investigated its role in fibroblast proliferation, extracellular matrix remodelling, collagen and elastin synthesis regulation, and antioxidant pathway activation. It is a key research compound in tissue biology, wound healing research, and cellular signalling studies.",
   molecularFormula:"C₁₄H₂₂CuN₆O₄",
   batchNumber:"CX-GHK-100-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:15, name:"BPC-157",           strength:"5mg",   price:15.00, img:"brand_assets/BPC-157_5mg.png",          slug:"bpc-157-5mg",        badge:null,
   desc:"Body protection compound; extensively studied for tissue healing and cytoprotection.",
   descFull:"BPC-157 is a synthetic pentadecapeptide derived from a region of the human Body Protection Compound found in gastric juice. It has been extensively studied in pre-clinical models for its cytoprotective and regenerative properties across gastrointestinal, musculoskeletal, and neural tissues. Proposed mechanisms include nitric oxide pathway modulation and localised angiogenic signalling.",
   molecularFormula:"C₆₂H₉₈N₁₆O₂₂",
   batchNumber:"CX-BPC-5-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:16, name:"BPC-157",           strength:"10mg",  price:24.00, img:"brand_assets/BPC-157_10mg.png",         slug:"bpc-157-10mg",       badge:null,
   desc:"Body protection compound; extensively studied for tissue healing and cytoprotection.",
   descFull:"BPC-157 is a synthetic pentadecapeptide derived from a region of the human Body Protection Compound found in gastric juice. It has been extensively studied in pre-clinical models for its cytoprotective and regenerative properties across gastrointestinal, musculoskeletal, and neural tissues. Proposed mechanisms include nitric oxide pathway modulation and localised angiogenic signalling.",
   molecularFormula:"C₆₂H₉₈N₁₆O₂₂",
   batchNumber:"CX-BPC-10-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:17, name:"Epithalon",         strength:"10mg",  price:19.00, img:"brand_assets/Epithalon_10mg.png",       slug:"epithalon-10mg",     badge:"New",
   desc:"Tetrapeptide studied for telomerase activation and potential anti-ageing mechanisms.",
   descFull:"Epithalon (Epitalon) is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) derived from the natural Epithalamin produced by the pineal gland. Research applications include telomerase activation studies, cellular ageing mechanisms, DNA integrity preservation, circadian rhythm regulation, and longevity biology. It is studied as a potential modulator of the hypothalamic-pituitary axis in ageing models.",
   molecularFormula:"C₁₄H₂₂N₄O₉",
   batchNumber:"CX-EPI-10-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:18, name:"TB-500",            strength:"5mg",   price:24.00, img:"brand_assets/TB-500_5mg.png",           slug:"tb-500-5mg",         badge:null,
   desc:"Thymosin β4-derived fragment; researched for tissue repair and cellular migration.",
   descFull:"TB-500 is a synthetic analogue of the naturally occurring thymic peptide Thymosin β4. Its primary research mechanisms centre on actin sequestration, facilitated cell migration, and angiogenesis promotion. Pre-clinical studies have explored its role in skeletal muscle repair, cardiac tissue recovery, tendon healing, and neural repair models. Supplied as a lyophilised solid for laboratory reconstitution.",
   molecularFormula:"C₂₁₂H₃₅₀N₅₆O₇₈S",
   batchNumber:"CX-TB5-5-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:19, name:"TB-500",            strength:"10mg",  price:42.00, img:"brand_assets/TB-500_10mg.png",          slug:"tb-500-10mg",        badge:null,
   desc:"Thymosin β4-derived fragment; researched for tissue repair and cellular migration.",
   descFull:"TB-500 is a synthetic analogue of the naturally occurring thymic peptide Thymosin β4. Its primary research mechanisms centre on actin sequestration, facilitated cell migration, and angiogenesis promotion. Pre-clinical studies have explored its role in skeletal muscle repair, cardiac tissue recovery, tendon healing, and neural repair models. Supplied as a lyophilised solid for laboratory reconstitution.",
   molecularFormula:"C₂₁₂H₃₅₀N₅₆O₇₈S",
   batchNumber:"CX-TB5-10-001", form:"Lyophilised Solid", mixingWaterRequired:true}
];

// Grouped compounds for shop grid
const COMPOUNDS = [
  {slug:"retatrutide",  name:"Retatrutide",       badge:"Bestseller", variants:[{id:1,strength:"10mg",price:55,img:"brand_assets/Retatrutide_10mg.png"},{id:2,strength:"20mg",price:99,img:"brand_assets/Retatrutide_20mg.png"}]},
  {slug:"tirzepatide",  name:"Tirzepatide",       badge:null,         variants:[{id:3,strength:"10mg",price:42,img:"brand_assets/Tirzepatide_10mg.png"},{id:4,strength:"20mg",price:85,img:"brand_assets/Tirzepatide_20mg.png"}]},
  {slug:"semaglutide",  name:"Semaglutide",       badge:null,         variants:[{id:5,strength:"5mg",price:35,img:"brand_assets/Semaglutide_5mg.png"},{id:6,strength:"10mg",price:52,img:"brand_assets/Semaglutide_10mg.png"}]},
  {slug:"tesamorelin",  name:"Tesamorelin",       badge:null,         variants:[{id:7,strength:"2mg",price:36,img:"brand_assets/Tesamorelin_2mg.png"},{id:8,strength:"5mg",price:52,img:"brand_assets/Tesamorelin_5mg.png"}]},
  {slug:"cjc-1295",     name:"CJC-1295 (No DAC)", badge:null,         variants:[{id:9,strength:"2mg",price:22,img:"brand_assets/CJC-1295_no_DAC_2mg.png"},{id:10,strength:"5mg",price:36,img:"brand_assets/CJC-1295_no_DAC_5mg.png"}]},
  {slug:"ipamorelin",   name:"Ipamorelin",        badge:null,         variants:[{id:11,strength:"2mg",price:14,img:"brand_assets/Ipamorelin_2mg.png"},{id:12,strength:"5mg",price:22,img:"brand_assets/Ipamorelin_5mg.png"}]},
  {slug:"ghk-cu",       name:"GHK-Cu",            badge:null,         variants:[{id:13,strength:"50mg",price:28,img:"brand_assets/GHK-Cu_50mg.png"},{id:14,strength:"100mg",price:42,img:"brand_assets/GHK-Cu_100mg.png"}]},
  {slug:"bpc-157",      name:"BPC-157",           badge:null,         variants:[{id:15,strength:"5mg",price:15,img:"brand_assets/BPC-157_5mg.png"},{id:16,strength:"10mg",price:24,img:"brand_assets/BPC-157_10mg.png"}]},
  {slug:"epithalon",    name:"Epithalon",         badge:"New",        variants:[{id:17,strength:"10mg",price:19,img:"brand_assets/Epithalon_10mg.png"}]},
  {slug:"tb-500",       name:"TB-500",            badge:null,         variants:[{id:18,strength:"5mg",price:24,img:"brand_assets/TB-500_5mg.png"},{id:19,strength:"10mg",price:42,img:"brand_assets/TB-500_10mg.png"}]}
];
