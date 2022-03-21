echo $MOONPACKET_DOCKER_PASSWORD | docker login --username "$MOONPACKET_DOCKER_USERNAME" --password-stdin

echo "moonpacket/moonbase-client:$PACKAGE_VERSION-$SEMAPHORE_GIT_BRANCH-$SEMAPHORE_GIT_SHA"

docker build ./services/client \
  -t "moonpacket/moonbase-client:$PACKAGE_VERSION-$SEMAPHORE_GIT_BRANCH-$SEMAPHORE_GIT_SHA" \
  -t "moonpacket/moonbase-client:$SEMAPHORE_GIT_BRANCH-latest" \
  --build-arg VITE_REACT_APP_CLERK_FRONTEND_API

docker push "moonpacket/moonbase-client:$PACKAGE_VERSION-$SEMAPHORE_GIT_BRANCH-$SEMAPHORE_GIT_SHA"

docker push "moonpacket/moonbase-client:$SEMAPHORE_GIT_BRANCH-latest"