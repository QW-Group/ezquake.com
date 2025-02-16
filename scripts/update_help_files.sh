# Delete existing help files
rm data/ezquake/help_*.json

# Download help files from ezquake-source
wget -i data/ezquake/files_to_download.txt -P data/ezquake

# Parse variables
(cd data/ezquake && python3 parse_variables.py)

# Delete obsolete files
rm data/ezquake/help_variables.json
