import * as React from "react";
import { loadSnailyCADDirectory } from "../actions";
import { Button } from "../components/Button";
import { ErrorMessage } from "../components/ErrorMessage";
import { loadFromLocalStorage } from "../utils/localStorage";

export function MainContainer() {
  const [localDir, setLocalDir] = React.useState(() => loadFromLocalStorage());
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  async function handleChangeDirectory() {
    const dir = await loadSnailyCADDirectory();

    if (dir instanceof Error) {
      setErrors((p) => ({ ...p, dir: dir.message }));
      return;
    }

    if (dir) {
      setLocalDir(dir);
      setErrors({});
    }
  }

  return (
    <div style={{ padding: 25, paddingTop: 0 }}>
      <header>
        <h1>SnailyCADv4</h1>
        <p>
          In this application you can start, stop and update SnailyCADv4. More functionality will
          come in the future.
        </p>
      </header>

      <section id="local_dir">
        <h2>Local Directory</h2>
        <p>
          Here you can select your local directory. This must be the root folder where you installed
          SnailyCAD.
        </p>

        <p>
          <b>Current directory: </b> {localDir}
        </p>

        <Button onClick={handleChangeDirectory}>Change Directory</Button>
        {errors.dir && <ErrorMessage>{errors.dir}</ErrorMessage>}
      </section>

      <section id="cad_state">
        <h2>Manage State</h2>
        <p>Here you can change the state of SnailyCAD. Such as start or stop.</p>

        <div>
          <Button>Start SnailyCAD</Button>
          <Button style={{ marginLeft: 10 }}>Stop SnailyCAD</Button>
        </div>
      </section>
    </div>
  );
}
