import CMS from "decap-cms-app"
import IndexPagePreview from "./preview/IndexPagePreview"
import ServicePagePreview from "./preview/ServicePagePreview"

CMS.registerPreviewTemplate("index", IndexPagePreview)
CMS.registerPreviewTemplate("services", ServicePagePreview)
