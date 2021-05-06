1 - run `Kubectl create -f sqlite_service.yaml` to start service
2 - `kubectl create -f sqlite_deployment.yaml`
3 - `kubectl create -f persistence_volume.yaml`
4 - `Kubectl create -f pv_claim.yaml`
5 - test: `kubectl run -it --rm --image=nouchka/sqlite3 --restart=Never sqlite`
