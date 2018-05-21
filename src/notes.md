# Roles

Roles are element types and authors _MUST NOT_ change role values over time or with user actions. Authors wishing to change a role _MUST_ do so by deleting the associated element and its children and replacing it with a new element with the appropriate role.

+---- `Abstract Roles Abstract` roles are used for the ontology. Authors _MUST NOT_ use abstract roles in content 🙅‍
| |
| +---- https://www.w3.org/TR/wai-aria/#abstract_roles
|
+---- `Widget Roles` roles act as standalone _user interface widgets_ or as part of larger, composite widgets.
| |
| +---- https://www.w3.org/TR/wai-aria/#widget_roles
|
+---- `Document Structure Roles` structures that organize content in a page. Are _not usually interactive_.
| |
| +---- https://www.w3.org/TR/wai-aria/#document_structure_roles
|
+---- `Landmark Roles` regions of the page intended as _navigational landmarks_
| |
| +---- https://www.w3.org/TR/wai-aria/#landmark_roles
|
+---- `Live Region Roles` live regions and may be modified by live region attributes
| |
| +---- https://www.w3.org/TR/wai-aria/#live_region_roles  
|
+---- `Window Roles` act as windows within the browser or application.
| |
| +---- https://www.w3.org/TR/wai-aria/#window_roles


# Roles definitions https://www.w3.org/TR/wai-aria/#role_definitions

grep vs input <-- bad
UNIX

## API

## Maintenance

## Performance

## A11y


Design Language System
Typography
Colors
Layout
User Interface

## Miscelaneas

- Polyfill should be a decision of the developer the element shouldn't import automatically the polyfill what about
  if the developer want to use another polyfill

## Families of components
- Promote
- Describe
- Navigate
- Catalog
- Atom
- Interface
