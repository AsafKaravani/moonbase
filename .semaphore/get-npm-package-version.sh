# Version key/value should be on his own line
echo cheking $1 for a version
export PACKAGE_VERSION=$(cat $1 \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

echo $PACKAGE_VERSIONs