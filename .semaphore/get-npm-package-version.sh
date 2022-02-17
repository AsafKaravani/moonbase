# Version key/value should be on his own line
echo cheking $1 for a version
RAW_PACKAGE_VERSION=$(cat $1 \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

PACKAGE_VERSION = RAW_PACKAGE_VERSION | xargs

export PACKAGE_VERSION
echo $PACKAGE_VERSION