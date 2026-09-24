# 🌧️ Potential Rainwater Harvesting Sites — Chirripó Pacífico River Basin, Costa Rica

**Pilot test for automating a WebMap (OpenLayers) based on multicriteria analysis with QGIS**

[![QGIS](https://img.shields.io/badge/QGIS-3.x-green.svg)](https://qgis.org)
[![GDAL](https://img.shields.io/badge/GDAL-3.x-blue.svg)](https://gdal.org)
[![SAGA GIS](https://img.shields.io/badge/SAGA%20GIS-7.x-orange.svg)](http://www.saga-gis.org)
[![OpenLayers](https://img.shields.io/badge/OpenLayers-WebMap-red.svg)](https://openlayers.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📖 Description

This repository contains the **documentation, scripts, and workflow** of a pilot test aimed at **automating a multicriteria analysis methodology** to identify potential **rainwater harvesting sites** for agricultural use in the **Chirripó Pacífico River basin, Costa Rica**.

The project reproduces and adapts the methodology proposed by **Benegas (2022)** and applied by **Danilo Dusan (2023)**, integrating **QGIS, GDAL, and SAGA GIS** tools, and publishing the results as an **interactive WebMap built with OpenLayers**.

[Route to OpenLayer Map] (https://anadreae.github.io/RainwaterHarvesting/)

> **Author:** Andrea E. Farfán Aragón

---

## 🎯 Objective

- Identify optimal zones for establishing rainwater harvesting structures (ponds, ditches, reservoirs) through a **weighted multicriteria analysis**.
- Automate the geospatial workflow so it can be replicated in other basins.
- Publish the final results in a **WebMap accessible via browser**.

---

## 🧪 Selection Criteria

| Variable | Type | Importance | Criterion |
|---|---|---|---|
| **Soil texture** | Biophysical | Site selection | High clay content → lower infiltration |
| **Terrain slope** | Biophysical | Site selection | Low slopes → avoids collapse and ensures runoff |
| **Land use / cover** | Biophysical | Structure establishment | Prioritizes pastures, annual crops, and herbaceous cover |
| **Accessibility** | Biophysical | Structure establishment | Proximity to access roads |
| **Landslide susceptibility** | Risk | Site selection | Excludes high-risk zones |
| **Population** | Social | Site selection | Prioritizes proximity to population or stakeholders |

---


---

## ⚙️ Workflow

### 1️⃣ Preliminary procedures
- **Basin delimitation:** Atlas from the GIS course – Universidad de Costa Rica, Western Campus.
- **DEM:** OpenTopography → Copernicus 30m (draw area of interest → *Submit*).
- **Clay content:** SoilGrids250m 2.0 → depth 5–15 cm, average value, 250 m resolution (2° × 2°, two tiles downloaded and merged with `merge`).
- **Land use:** Atlas from the UCR GIS course. *Note:* for this test, pasture areas are assumed to be the agricultural/agrarian area.

### 2️⃣ DEM processing
1. **Fill Sinks (Wang & Liu – SAGA):** generates `Filled DEM` and `Flow Directions`. Corrects trapped-water errors.
2. **Slope (GDAL / Raster Analysis):** calculate in **percentage**, ensuring the CRS allows **meter** units (avoid WGS84 decimal).
3. **Slope reclassification:**

| Slope (%) | Scale | Description | Category |
|---|---|---|---|
| > 20 | 1 | Very low | Unacceptable |
| 10 – 20 | 2 | Low | Acceptable |
| 5 – 10 | 3 | Medium | Adequate |
| 3 – 5 | 4 | High | Very adequate |
| < 3 | 5 | Very high | Optimal |

### 3️⃣ Order-1 stream network
- **Strahler Order (SAGA):** assign an order to each stream.
- **Raster Calculator:** `"strahler_completo@1" = 1` → keeps only order 1.
- **Euclidean distance:** distance from each cell to the nearest source (order-1 network).
- **Reclassification** (only values 1 and 5).

### 4️⃣ Clay and land use processing
- **Clay:** reclassify according to content (1–5).
- **Land use:**

| Land use | Scale | Prioritization | Category |
|---|---|---|---|
| Urban / population center | 1 | Very low | Unacceptable |
| Perennial crops | 2 | Low | Acceptable |
| Shrubland and secondary forest | 3 | Medium | Adequate |
| Bare soil / no vegetation | 4 | High | Very adequate |
| Annual crops, pastures, and herbaceous | 5 | Very high | Optimal |

> ⚠️ **Important:** when generating layers with SAGA (`.sdat`), convert to `.tif` for subsequent operations.

### 5️⃣ Weighted overlay — Phase 1
Combine **slope (50%)** + **distance to stream network (50%)**:

('disEu_reclass_repixeled@1' * 0.5) + ('pendientes_cuencaRC_reclass_CR05@1' * 0.5)

Result: ponderacion_morfometria → potential zones based on morphometric and hydrological variables.

💡 Tip: use the Raster Calculator with the reference layer with the smallest pixel to match resolution, extent, and CRS (avoids the Raster anpassen bug).

### 6️⃣ Weighted overlay — Phase 2
Combine land use (40%) + clay (30%) + morphometric weighting (30%):

("usoSuelos_reclassCR05_tif@1" * 0.4) + ("arcilla_reclass_repixeled@1" * 0.3) + ("ponderacion_morfometria@1" * 0.3)
Result: ponderacion2_reclass → values 1 to 5 (unacceptable → optimal).

### 7️⃣ Results and export
- Convert final raster to polygon.
- Export to GeoJSON / COG for the WebMap.
- Calculate areas (ha) per category.

## 📊 Main Results
- Very adequate (4) and optimal (5) areas are considerably extensive, presenting an extention of approx. 4575 ha and 102.3 ha respectively. 
- Many optimal areas are located near urban zones, which developed around the Chirripó River.
- It is recommended to incorporate road accessibility in future studies, since in remote regions the automatic analysis may not be sufficient.





