import json
import re


def slugify(text: str) -> str:
    return re.sub(r'[\W_]+', '-', text.lower()).strip('-')


# load
with open("help_variables.json") as fp:
    values = json.load(fp)

# items -> groups
items_per_group_id = {}
default_group_id = "0"

for name, props in values["vars"].items():
    group_id = props.get("group-id", default_group_id)

    if group_id not in items_per_group_id:
        items_per_group_id[group_id] = []

    props["name"] = name
    items_per_group_id[group_id].append(props)

del values["vars"]

# rearrange groups, append vars
result_tree = {}

for group_obj in values["groups"]:
    major_group = group_obj["major-group"]
    major_group_slug = slugify(major_group)

    if major_group == "Obsolete":
        continue

    if major_group_slug not in result_tree:
        major_group_url = f"/docs/vars/{major_group_slug}/"

        result_tree[major_group_slug] = {
            "title": major_group,
            "slug": major_group_slug,
            "url": major_group_url,
            "items": []
        }
    else:
        major_group_url = result_tree[major_group_slug]["url"]

    group_id = group_obj["id"]
    group_slug = slugify(group_obj["name"])

    result_tree[major_group_slug]["items"].append({
        "id": group_id,
        "title": group_obj["name"],
        "slug": group_slug,
        "url": f"{major_group_url}#{group_slug}",
        "items": items_per_group_id.get(group_id, [])
    })

# sort groups
for major_group in result_tree.values():
    major_group["items"] = sorted(major_group["items"], key=lambda i: i['title'])

# save tree
with open("help_variables_tree.json", "w") as fp:
    json.dump(result_tree, fp, indent=2)
