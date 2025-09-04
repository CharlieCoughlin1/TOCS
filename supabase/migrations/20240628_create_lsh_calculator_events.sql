CREATE TABLE IF NOT EXISTS public.lsh_calculator_events (
    id BIGSERIAL PRIMARY KEY,
    created_at timestamptz NOT NULL DEFAULT now(),
    event_ts timestamptz,
    page_url text,
    page_referrer text,
    user_agent text,
    session_id text,
    userid text,
    calc_seq int,
    calc_type text,
    building_age text,
    workstation_density_m2 numeric,
    hybrid_factor numeric,
    hybrid_occupancy numeric,
    budget_type text,
    location1 text,
    location2 text,
    staff_input numeric,
    space_required_sqft numeric,
    workstations_required numeric,
    annual_cost numeric,
    cost_per_workstation_annual numeric,
    cost_per_workstation_monthly numeric,
    budget_value numeric,
    company text,
    contact_name text,
    contact_email text,
    contact_phone text,
    marketing_opt_in boolean DEFAULT false,
    is_lead boolean DEFAULT false
);

ALTER TABLE public.lsh_calculator_events ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_lsh_events_created_at ON public.lsh_calculator_events (created_at);
CREATE INDEX IF NOT EXISTS idx_lsh_events_event_ts ON public.lsh_calculator_events (event_ts);
CREATE INDEX IF NOT EXISTS idx_lsh_events_session_calc_seq ON public.lsh_calculator_events (session_id, calc_seq);

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'lsh_calculator_events' AND policyname = 'allow authenticated select'
  ) THEN
    CREATE POLICY "allow authenticated select"
      ON public.lsh_calculator_events
      FOR SELECT
      TO authenticated
      USING (true);
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'lsh_calculator_events' AND policyname = 'allow service role insert'
  ) THEN
    CREATE POLICY "allow service role insert"
      ON public.lsh_calculator_events
      FOR INSERT
      TO service_role
      WITH CHECK (true);
  END IF;
END
$$;
