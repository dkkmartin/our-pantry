export interface Main {
  code: string
  product: Product
  status: number
  status_verbose: string
}

export interface Product {
  _id: string
  _keywords: string[]
  abbreviated_product_name: string
  abbreviated_product_name_fr: string
  abbreviated_product_name_fr_imported: string
  abbreviated_product_name_imported: string
  added_countries_tags: unknown[]
  additives_debug_tags: unknown[]
  additives_n: number
  additives_old_n: number
  additives_old_tags: unknown[]
  additives_original_tags: unknown[]
  additives_prev_original_tags: unknown[]
  additives_tags: unknown[]
  allergens: string
  allergens_from_ingredients: string
  allergens_from_user: string
  allergens_hierarchy: string[]
  allergens_imported: string
  allergens_lc: string
  allergens_tags: string[]
  amino_acids_prev_tags: unknown[]
  amino_acids_tags: unknown[]
  brands: Brands
  brands_imported: Brands
  brands_tags: LastEditor[]
  categories: string
  categories_hierarchy: string[]
  categories_imported: string
  categories_lc: string
  categories_old: string
  categories_properties: CategoriesProperties
  categories_properties_tags: string[]
  categories_tags: string[]
  category_properties: CategoryProperties
  checkers_tags: unknown[]
  ciqual_food_name_tags: string[]
  cities_tags: unknown[]
  code: string
  codes_tags: string[]
  compared_to_category: string
  complete: number
  completeness: number
  conservation_conditions: string
  conservation_conditions_fr: string
  conservation_conditions_fr_imported: string
  correctors_tags: string[]
  countries: string
  countries_hierarchy: string[]
  countries_imported: string
  countries_lc: string
  countries_tags: string[]
  created_t: number
  creator: string
  customer_service: string
  customer_service_fr: string
  customer_service_fr_imported: string
  data_quality_bugs_tags: unknown[]
  data_quality_errors_tags: unknown[]
  data_quality_info_tags: string[]
  data_quality_tags: string[]
  data_quality_warnings_tags: string[]
  data_sources: string
  data_sources_imported: string
  data_sources_tags: string[]
  debug_param_sorted_langs: string[]
  debug_tags: string[]
  ecoscore_data: EcoscoreData
  ecoscore_extended_data: EcoscoreExtendedData
  ecoscore_extended_data_version: string
  ecoscore_grade: EcoscoreGrade
  ecoscore_score: number
  ecoscore_tags: EcoscoreGrade[]
  editors: string[]
  editors_tags: string[]
  emb_codes: string
  emb_codes_20141016: string
  emb_codes_orig: string
  emb_codes_tags: unknown[]
  entry_dates_tags: string[]
  environment_impact_level: string
  environment_impact_level_tags: unknown[]
  expiration_date: string
  food_groups: string
  food_groups_tags: string[]
  'fruits-vegetables-nuts_100g_estimate': number
  generic_name: string
  generic_name_en: string
  generic_name_fr: string
  generic_name_fr_imported: string
  grades: CategoryProperties
  id: string
  image_front_small_url: string
  image_front_thumb_url: string
  image_front_url: string
  image_ingredients_small_url: string
  image_ingredients_thumb_url: string
  image_ingredients_url: string
  image_nutrition_small_url: string
  image_nutrition_thumb_url: string
  image_nutrition_url: string
  image_packaging_small_url: string
  image_packaging_thumb_url: string
  image_packaging_url: string
  image_small_url: string
  image_thumb_url: string
  image_url: string
  images: Images
  informers_tags: string[]
  ingredients: Ingredient[]
  ingredients_analysis: CategoryProperties
  ingredients_analysis_tags: string[]
  ingredients_debug: Array<null | string>
  ingredients_from_or_that_may_be_from_palm_oil_n: number
  ingredients_from_palm_oil_n: number
  ingredients_from_palm_oil_tags: unknown[]
  ingredients_hierarchy: string[]
  ingredients_ids_debug: string[]
  ingredients_lc: string
  ingredients_n: number
  ingredients_n_tags: string[]
  ingredients_original_tags: string[]
  ingredients_percent_analysis: number
  ingredients_tags: string[]
  ingredients_text: string
  ingredients_text_debug: string
  ingredients_text_en: string
  ingredients_text_fr: string
  ingredients_text_fr_imported: string
  ingredients_text_with_allergens: string
  ingredients_text_with_allergens_en: string
  ingredients_text_with_allergens_fr: string
  ingredients_that_may_be_from_palm_oil_n: number
  ingredients_that_may_be_from_palm_oil_tags: unknown[]
  ingredients_with_specified_percent_n: number
  ingredients_with_specified_percent_sum: number
  ingredients_with_unspecified_percent_n: number
  ingredients_with_unspecified_percent_sum: number
  ingredients_without_ciqual_codes: unknown[]
  ingredients_without_ciqual_codes_n: number
  interface_version_created: string
  interface_version_modified: string
  known_ingredients_n: number
  labels: string
  labels_hierarchy: string[]
  labels_lc: string
  labels_old: string
  labels_tags: string[]
  lang: string
  lang_imported: string
  languages: Languages
  languages_codes: LanguagesCodes
  languages_hierarchy: string[]
  languages_tags: string[]
  last_edit_dates_tags: string[]
  last_editor: LastEditor
  last_image_dates_tags: string[]
  last_image_t: number
  last_modified_by: LastEditor
  last_modified_t: number
  last_updated_t: number
  lc: string
  lc_imported: string
  link: string
  main_countries_tags: unknown[]
  manufacturing_places: string
  manufacturing_places_tags: unknown[]
  max_imgid: string
  minerals_prev_tags: unknown[]
  minerals_tags: unknown[]
  misc_tags: string[]
  new_additives_n: number
  no_nutrition_data: string
  no_nutrition_data_imported: string
  nova_group: number
  nova_group_debug: string
  nova_groups: string
  nova_groups_markers: CategoryProperties
  nova_groups_tags: string[]
  nucleotides_prev_tags: unknown[]
  nucleotides_tags: unknown[]
  nutrient_levels: NutrientLevels
  nutrient_levels_tags: string[]
  nutriments: Nutriments
  nutriments_estimated: { [key: string]: number }
  nutriscore: { [key: string]: Nutriscore }
  nutriscore_2021_tags: string[]
  nutriscore_2023_tags: string[]
  nutriscore_data: NutriscoreData
  nutriscore_grade: string
  nutriscore_score: number
  nutriscore_score_opposite: number
  nutriscore_tags: string[]
  nutriscore_version: string
  nutrition_data: string
  nutrition_data_per: string
  nutrition_data_per_imported: string
  nutrition_data_prepared: string
  nutrition_data_prepared_per: string
  nutrition_data_prepared_per_imported: string
  nutrition_grade_fr: string
  nutrition_grades: string
  nutrition_grades_tags: string[]
  nutrition_score_beverage: number
  nutrition_score_debug: string
  nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients: number
  nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients_value: number
  obsolete: string
  obsolete_imported: string
  obsolete_since_date: string
  origin: string
  origin_en: string
  origin_fr: string
  origins: string
  origins_hierarchy: unknown[]
  origins_lc: string
  origins_old: string
  origins_tags: unknown[]
  other_nutritional_substances_prev_tags: unknown[]
  other_nutritional_substances_tags: unknown[]
  owner: LastEditor
  owner_fields: { [key: string]: number }
  owner_imported: LastEditor
  owners_tags: LastEditor
  packaging: string
  packaging_hierarchy: string[]
  packaging_imported: string
  packaging_lc: string
  packaging_materials_tags: string[]
  packaging_old: string
  packaging_old_before_taxonomization: string
  packaging_recycling_tags: unknown[]
  packaging_shapes_tags: string[]
  packaging_tags: string[]
  packaging_text: string
  packaging_text_en: string
  packaging_text_fr: string
  packagings: ProductPackaging[]
  packagings_complete: number
  packagings_materials: PackagingsMaterials
  packagings_n: number
  photographers_tags: string[]
  pnns_groups_1: string
  pnns_groups_1_tags: string[]
  pnns_groups_2: string
  pnns_groups_2_tags: string[]
  popularity_key: number
  popularity_tags: string[]
  preparation: string
  preparation_fr: string
  preparation_fr_imported: string
  producer_version_id: string
  producer_version_id_imported: string
  product_name: string
  product_name_de: string
  product_name_en: string
  product_name_fr: string
  product_name_fr_imported: string
  product_quantity: string
  product_quantity_unit: string
  purchase_places: string
  purchase_places_tags: string[]
  quantity: string
  quantity_imported: string
  removed_countries_tags: unknown[]
  rev: number
  scans_n: number
  scores: CategoryProperties
  selected_images: SelectedImages
  serving_quantity: string
  serving_quantity_unit: string
  serving_size: string
  serving_size_imported: string
  sortkey: number
  sources: Source[]
  sources_fields: SourcesFields
  states: string
  states_hierarchy: string[]
  states_tags: string[]
  stores: string
  stores_tags: string[]
  traces: string
  traces_from_ingredients: string
  traces_from_user: string
  traces_hierarchy: string[]
  traces_imported: string
  traces_lc: string
  traces_tags: string[]
  unique_scans_n: number
  unknown_ingredients_n: number
  unknown_nutrients_tags: unknown[]
  update_key: string
  vitamins_prev_tags: unknown[]
  vitamins_tags: unknown[]
  weighers_tags: unknown[]
  weighters_tags: unknown[]
}

export enum Brands {
  Barilla = 'Barilla',
  BarillaFranceSa = 'barilla-france-sa',
}

export enum LastEditor {
  Barilla = 'barilla',
  OrgBarillaFranceSa = 'org-barilla-france-sa',
}

export interface CategoriesProperties {
  'agribalyse_food_code:en': string
  'ciqual_food_code:en': string
}

export interface CategoryProperties {
  [key: string]: number
}

export interface EcoscoreData {
  adjustments: Adjustments
  agribalyse: Agribalyse
  grade: EcoscoreGrade
  grades: { [key: string]: EcoscoreGrade }
  missing: Missing
  missing_data_warning: number
  previous_data: PreviousData
  score: number
  scores: { [key: string]: number }
  status: string
}

export interface Adjustments {
  origins_of_ingredients: OriginsOfIngredients
  packaging: AdjustmentsPackaging
  production_system: ProductionSystem
  threatened_species: CategoryProperties
}

export interface OriginsOfIngredients {
  aggregated_origins: AggregatedOrigin[]
  epi_score: number
  epi_value: number
  origins_from_categories: string[]
  origins_from_origins_field: string[]
  transportation_score: number
  transportation_scores: { [key: string]: number }
  transportation_value: number
  transportation_values: { [key: string]: number }
  value: number
  values: { [key: string]: number }
  warning: string
}

export interface AggregatedOrigin {
  epi_score: string
  origin: string
  percent: number
  transportation_score: number
}

export interface AdjustmentsPackaging {
  non_recyclable_and_non_biodegradable_materials: number
  packagings: PackagingPackaging[]
  score: number
  value: number
  warning: string
}

export interface PackagingPackaging {
  ecoscore_material_score: number
  ecoscore_shape_ratio: number
  material: string
  shape: string
}

export interface ProductionSystem {
  labels: unknown[]
  value: number
  warning: string
}

export interface Agribalyse {
  agribalyse_food_code: string
  co2_agriculture: number
  co2_consumption: number
  co2_distribution: number
  co2_packaging: number
  co2_processing: number
  co2_total: number
  co2_transportation: number
  code: string
  dqr: string
  ef_agriculture: number
  ef_consumption: number
  ef_distribution: number
  ef_packaging: number
  ef_processing: number
  ef_total: number
  ef_transportation: number
  is_beverage: number
  name_en: string
  name_fr: string
  score: number
  version?: string
}

export enum EcoscoreGrade {
  B = 'b',
}

export interface Missing {
  labels: number
  origins: number
  packagings: number
}

export interface PreviousData {
  agribalyse: Agribalyse
  grade: string
  score: number
}

export interface EcoscoreExtendedData {
  impact: Impact
}

export interface Impact {
  ef_single_score_log_stddev: number
  likeliest_impacts: LikeliestImpacts
  likeliest_recipe: LikeliestRecipe
  mass_ratio_uncharacterized: number
  uncharacterized_ingredients: UncharacterizedIngredients
  uncharacterized_ingredients_mass_proportion: UncharacterizedIngredientsMassProportionClass
  uncharacterized_ingredients_ratio: UncharacterizedIngredientsMassProportionClass
  warnings: string[]
}

export interface LikeliestImpacts {
  Climate_change: number
  EF_single_score: number
}

export interface LikeliestRecipe {
  'en:durum_wheat_semolina': number
  'en:water': number
}

export interface UncharacterizedIngredients {
  impact: unknown[]
  nutrition: unknown[]
}

export interface UncharacterizedIngredientsMassProportionClass {
  impact: number
  nutrition: number
}

export interface Images {
  '1': The1
  '2': The1
  '3': The1
  '4': The10
  '5': The10
  '6': The10
  '7': The10
  '8': The10
  '9': The10
  '10': The10
  '11': The10
  '12': The1
  '13': The1
  '14': The1
  '15': The1
  '16': The1
  '17': The1
  '18': The1
  '19': The1
  '20': The1
  '21': The1
  '22': The1
  '23': The1
  '24': The1
  '25': The1
  '26': The1
  '27': The1
  '28': The1
  '29': The1
  '30': The1
  '31': The1
  '32': The1
  '33': The1
  front: ImagesFront
  front_fr: FrontFr
  ingredients: ImagesFront
  ingredients_fr: Fr
  nutrition: ImagesFront
  nutrition_fr: Fr
  packaging_fr: Fr
}

export interface The1 {
  sizes: Sizes
  uploaded_t: number
  uploader: string
}

export interface Sizes {
  '100': The100
  '400': The100
  full: The100
  '200'?: The100
}

export interface The100 {
  h: number
  w: number
}

export interface The10 {
  sizes: Sizes
  uploaded_t: string
  uploader: string
}

export interface ImagesFront {
  geometry: string
  imgid: string
  normalize: string
  rev: string
  sizes: Sizes
  white_magic: null | string
}

export interface FrontFr {
  angle: number
  coordinates_image_size: string
  geometry: string
  imgid: string
  normalize: string
  rev: string
  sizes: Sizes
  white_magic: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Fr {
  angle: string
  coordinates_image_size: string
  geometry: string
  imgid: string
  normalize: null
  rev: string
  sizes: Sizes
  white_magic: null
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Ingredient {
  ciqual_food_code: string
  id: string
  percent_estimate: number
  percent_max: number
  percent_min: number
  text: string
  vegan: string
  vegetarian: string
}

export interface Languages {
  'en:english': number
  'en:french': number
  'en:german': number
}

export interface LanguagesCodes {
  de: number
  en: number
  fr: number
}

export interface NutrientLevels {
  fat: string
  salt: string
  'saturated-fat': string
  sugars: string
}

export interface Nutriments {
  carbohydrates: number
  carbohydrates_100g: number
  carbohydrates_serving: number
  carbohydrates_unit: string
  carbohydrates_value: number
  energy: number
  'energy-kcal': number
  'energy-kcal_100g': number
  'energy-kcal_serving': number
  'energy-kcal_unit': string
  'energy-kcal_value': number
  'energy-kcal_value_computed': number
  'energy-kj': number
  'energy-kj_100g': number
  'energy-kj_serving': number
  'energy-kj_unit': string
  'energy-kj_value': number
  'energy-kj_value_computed': number
  energy_100g: number
  energy_serving: number
  energy_unit: string
  energy_value: number
  fat: number
  fat_100g: number
  fat_serving: number
  fat_unit: string
  fat_value: number
  fiber: number
  fiber_100g: number
  fiber_serving: number
  fiber_unit: string
  fiber_value: number
  'fruits-vegetables-legumes-estimate-from-ingredients_100g': number
  'fruits-vegetables-legumes-estimate-from-ingredients_serving': number
  'fruits-vegetables-nuts': number
  'fruits-vegetables-nuts-estimate-from-ingredients_100g': number
  'fruits-vegetables-nuts-estimate-from-ingredients_serving': number
  'fruits-vegetables-nuts_100g': number
  'fruits-vegetables-nuts_serving': number
  'fruits-vegetables-nuts_unit': string
  'fruits-vegetables-nuts_value': number
  'nova-group': number
  'nova-group_100g': number
  'nova-group_serving': number
  'nutrition-score-fr': number
  'nutrition-score-fr_100g': number
  proteins: number
  proteins_100g: number
  proteins_serving: number
  proteins_unit: string
  proteins_value: number
  salt: number
  salt_100g: number
  salt_serving: number
  salt_unit: string
  salt_value: number
  'saturated-fat': number
  'saturated-fat_100g': number
  'saturated-fat_serving': number
  'saturated-fat_unit': string
  'saturated-fat_value': number
  sodium: number
  sodium_100g: number
  sodium_serving: number
  sodium_unit: string
  sodium_value: number
  sugars: number
  sugars_100g: number
  sugars_serving: number
  sugars_unit: string
  sugars_value: number
}

export interface Nutriscore {
  category_available: number
  data: Data
  grade: string
  nutrients_available: number
  nutriscore_applicable: number
  nutriscore_computed: number
  score: number
}

export interface Data {
  energy?: number
  energy_points?: number
  energy_value?: number
  fiber?: number
  fiber_points?: number
  fiber_value?: number
  fruits_vegetables_nuts_colza_walnut_olive_oils?: number
  fruits_vegetables_nuts_colza_walnut_olive_oils_points?: number
  fruits_vegetables_nuts_colza_walnut_olive_oils_value?: number
  is_beverage: number
  is_cheese: number
  is_fat?: number
  is_water: number
  negative_points: number
  positive_points: number
  proteins?: number
  proteins_points?: number
  proteins_value?: number
  saturated_fat?: number
  saturated_fat_points?: number
  saturated_fat_value?: number
  sodium?: number
  sodium_points?: number
  sodium_value?: number
  sugars?: number
  sugars_points?: number
  sugars_value?: number
  grade?: string
  score?: number
  components?: Components
  count_proteins?: number
  count_proteins_reason?: string
  is_fat_oil_nuts_seeds?: number
  is_red_meat_product?: number
  negative_points_max?: number
  positive_nutrients?: string[]
  positive_points_max?: number
}

export interface Components {
  negative: Tive[]
  positive: Tive[]
}

export interface Tive {
  id: string
  points: number
  points_max: number
  unit: string
  value: number
}

export interface NutriscoreData {
  energy: number
  energy_points: number
  energy_value: number
  fiber: number
  fiber_points: number
  fiber_value: number
  fruits_vegetables_nuts_colza_walnut_olive_oils: number
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: number
  is_beverage: number
  is_cheese: number
  is_fat: number
  is_water: number
  negative_points: number
  positive_points: number
  proteins: number
  proteins_points: number
  proteins_value: number
  saturated_fat: number
  saturated_fat_points: number
  saturated_fat_value: number
  sodium: number
  sodium_points: number
  sodium_value: number
  sugars: number
  sugars_points: number
  sugars_value: number
  grade?: string
  score?: number
}

export interface ProductPackaging {
  material?: string
  shape: string
}

export interface PackagingsMaterials {
  all: CategoryProperties
  'en:paper-or-cardboard': CategoryProperties
  'en:unknown': CategoryProperties
}

export interface SelectedImages {
  front: PackagingClass
  ingredients: PackagingClass
  nutrition: PackagingClass
  packaging: PackagingClass
}

export interface PackagingClass {
  display: Display
  small: Display
  thumb: Display
}

export interface Display {
  fr: string
}

export interface Source {
  fields: string[]
  id: LastEditor
  images: unknown[]
  import_t: number
  manufacturer: number | string
  name: Brands | null
  url: null | string
}

export interface SourcesFields {
  'org-gs1': OrgGs1
}

export interface OrgGs1 {
  gln: string
  gpcCategoryCode: string
  gpcCategoryName: string
  isAllergenRelevantDataProvided: string
  lastChangeDateTime: Date
  partyName: string
  productionVariantDescription: string
  publicationDateTime: Date
}
